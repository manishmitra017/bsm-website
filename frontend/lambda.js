const { createServer, proxy } = require('@vendia/serverless-express');
const next = require('next');

const app = next({
  dev: false,
  customServer: true,
  conf: {
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://bsm.org.au',
      NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Bengali Society of Melbourne',
      NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@bsm.org.au',
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      SES_FROM_EMAIL: process.env.SES_FROM_EMAIL || 'noreply@bsm.org.au',
      // AWS_REGION is automatically available in Lambda runtime
    }
  }
});

let server;

exports.handler = async (event, context) => {
  if (!server) {
    const nextApp = await app.prepare();
    const handle = app.getRequestHandler();

    server = createServer((req, res) => handle(req, res));
  }

  return proxy(server, event, context, 'PROMISE').promise;
};