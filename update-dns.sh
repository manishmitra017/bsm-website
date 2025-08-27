#!/bin/bash

# This script updates the existing bsm.org.au A record to point to the new load balancer
# Run this after the CDK deployment completes successfully

# Check if required parameters are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <NEW_LOAD_BALANCER_DNS> <LOAD_BALANCER_HOSTED_ZONE_ID>"
    echo "Example: $0 myapp-123456.ap-southeast-2.elb.amazonaws.com Z1GM3OXH4ZPM65"
    echo ""
    echo "Get these values from the CDK output after deployment:"
    echo "- LoadBalancerDNS: The new load balancer DNS name"
    echo "- LoadBalancerHostedZoneId: The load balancer's hosted zone ID"
    exit 1
fi

NEW_LB_DNS="$1"
LB_HOSTED_ZONE_ID="$2"

# Get the hosted zone ID for bsm.org.au
HOSTED_ZONE_ID=$(aws route53 list-hosted-zones --query "HostedZones[?Name=='bsm.org.au.'].Id" --output text | cut -d'/' -f3)

if [ -z "$HOSTED_ZONE_ID" ]; then
    echo "Error: Could not find hosted zone for bsm.org.au"
    exit 1
fi

echo "Updating DNS record for bsm.org.au to point to $NEW_LB_DNS"

# Create the change request
CHANGE_BATCH=$(cat <<EOF
{
    "Changes": [
        {
            "Action": "UPSERT",
            "ResourceRecordSet": {
                "Name": "bsm.org.au",
                "Type": "A",
                "AliasTarget": {
                    "DNSName": "$NEW_LB_DNS",
                    "EvaluateTargetHealth": true,
                    "HostedZoneId": "$LB_HOSTED_ZONE_ID"
                }
            }
        }
    ]
}
EOF
)

# Submit the change
CHANGE_ID=$(aws route53 change-resource-record-sets \
    --hosted-zone-id "$HOSTED_ZONE_ID" \
    --change-batch "$CHANGE_BATCH" \
    --query 'ChangeInfo.Id' \
    --output text)

if [ $? -eq 0 ]; then
    echo "DNS update submitted successfully. Change ID: $CHANGE_ID"
    echo "Waiting for change to propagate..."
    
    # Wait for the change to complete
    aws route53 wait resource-record-sets-changed --id "$CHANGE_ID"
    
    if [ $? -eq 0 ]; then
        echo "DNS update completed successfully!"
        echo "bsm.org.au now points to $NEW_LB_DNS"
    else
        echo "Warning: DNS change submitted but waiting for completion failed."
        echo "Check the change status manually with: aws route53 get-change --id $CHANGE_ID"
    fi
else
    echo "Error: Failed to update DNS record"
    exit 1
fi