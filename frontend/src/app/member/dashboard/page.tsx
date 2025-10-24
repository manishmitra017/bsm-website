'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Users } from 'lucide-react';

export default function MemberDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Member Dashboard</h1>
          <p className="text-red-600 font-medium text-lg sm:text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
            সদস্য ড্যাশবোর্ড
          </p>
        </div>
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome, {session.user?.name || 'Member'}!
              </h2>
              <p className="text-gray-600">{session.user?.email}</p>
            </div>
          </div>

          {/* Member Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="text-sm text-red-600 font-medium mb-1">Member ID</p>
              <p className="text-2xl font-bold text-red-800">
                {session.user?.memberId || 'BSM2025001'}
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="text-sm text-orange-600 font-medium mb-1">Membership Type</p>
              <p className="text-2xl font-bold text-orange-800">
                {session.user?.membershipType || 'SINGLE'}
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <p className="text-sm text-yellow-600 font-medium mb-1">Status</p>
              <p className="text-2xl font-bold text-yellow-800">
                {session.user?.membershipStatus || 'PENDING'}
              </p>
            </div>
          </div>

          {/* Pending Status Notice */}
          {session.user?.membershipStatus === 'PENDING' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4"
            >
              <p className="text-yellow-800">
                <strong>⏳ Application Pending:</strong> Your membership application is awaiting approval
                from the BSM committee. You'll receive an email once your membership is activated.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => router.push('/member/profile')}
              className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Edit Profile</h4>
                  <p className="text-sm text-gray-600">Update your personal information</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => router.push('/member/family')}
              className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Manage Family</h4>
                  <p className="text-sm text-gray-600">Add or edit family members</p>
                </div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Debug Info (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-gray-100 rounded-lg p-4"
          >
            <p className="text-xs text-gray-600 font-mono mb-2">Debug Info (dev only):</p>
            <pre className="text-xs text-gray-700 overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </motion.div>
        )}
      </main>
    </div>
  );
}
