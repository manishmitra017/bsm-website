'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Edit2, Trash2, Save, X, Users } from 'lucide-react';

interface FamilyMember {
  id?: string;
  name: string;
  age: number;
  sex: 'MALE' | 'FEMALE' | 'OTHER';
  phone: string;
  relationship: string;
}

export default function ManageFamilyPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState<FamilyMember>({
    name: '',
    age: 0,
    sex: 'MALE',
    phone: '',
    relationship: 'SPOUSE'
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchFamilyMembers();
    }
  }, [session]);

  const fetchFamilyMembers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/family');
      if (response.ok) {
        const data = await response.json();
        setFamilyMembers(data.familyMembers || []);
      }
    } catch (error) {
      console.error('Error fetching family members:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return 'Name is required';
    }
    if (!formData.age || formData.age < 0 || formData.age > 150) {
      return 'Please enter a valid age';
    }
    if (!formData.sex) {
      return 'Sex is required';
    }

    // Phone is mandatory only for adults (18+)
    if (formData.age >= 18 && !formData.phone.trim()) {
      return 'Phone number is required for adults (18+)';
    }

    // Validate phone format if provided
    if (formData.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        return 'Please enter a valid phone number';
      }
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const url = editingId ? `/api/family/${editingId}` : '/api/family';
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(editingId ? 'Family member updated successfully!' : 'Family member added successfully!');
        setShowForm(false);
        setEditingId(null);
        setFormData({ name: '', age: 0, sex: 'MALE', phone: '', relationship: 'SPOUSE' });
        fetchFamilyMembers();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to save family member');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleEdit = (member: FamilyMember) => {
    setFormData(member);
    setEditingId(member.id || null);
    setShowForm(true);
    setError('');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this family member?')) {
      return;
    }

    try {
      const response = await fetch(`/api/family/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setSuccess('Family member removed successfully!');
        fetchFamilyMembers();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError('Failed to remove family member');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: '', age: 0, sex: 'MALE', phone: '', relationship: 'SPOUSE' });
    setError('');
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const isChild = formData.age > 0 && formData.age < 18;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/member/dashboard')}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Manage Family</h1>
              <p className="text-red-600 font-medium text-lg sm:text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                পরিবার পরিচালনা
              </p>
            </div>

            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Member
              </button>
            )}
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6"
          >
            {success}
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6"
          >
            {error}
          </motion.div>
        )}

        {/* Add/Edit Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingId ? 'Edit Family Member' : 'Add Family Member'}
              </h2>
              <button
                onClick={handleCancel}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    placeholder="Enter name"
                    required
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="150"
                    value={formData.age || ''}
                    onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    placeholder="Enter age"
                    required
                  />
                  {isChild && (
                    <p className="text-xs text-orange-600 mt-1">
                      Phone number is optional for children under 18
                    </p>
                  )}
                </div>

                {/* Sex */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sex <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={formData.sex}
                    onChange={(e) => setFormData({ ...formData, sex: e.target.value as 'MALE' | 'FEMALE' | 'OTHER' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                    required
                  >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number {!isChild && <span className="text-red-600">*</span>}
                    {isChild && <span className="text-gray-500 text-xs">(Optional for children)</span>}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    placeholder="Enter phone number"
                    required={!isChild}
                  />
                </div>

                {/* Relationship */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                    required
                  >
                    <option value="SPOUSE">Spouse</option>
                    <option value="CHILD">Child</option>
                    <option value="PARENT">Parent</option>
                    <option value="SIBLING">Sibling</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Save className="w-5 h-5" />
                  {editingId ? 'Update' : 'Add'} Member
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Family Members List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">Family Members</h2>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              {familyMembers.length}
            </span>
          </div>

          {familyMembers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No family members added yet</p>
              <button
                onClick={() => setShowForm(true)}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Add your first family member
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {familyMembers.map((member) => (
                <div
                  key={member.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                          {member.relationship}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Age:</span> {member.age} years
                          {member.age < 18 && <span className="text-orange-600 ml-1">(Child)</span>}
                        </div>
                        <div>
                          <span className="font-medium">Sex:</span> {member.sex}
                        </div>
                        <div>
                          <span className="font-medium">Phone:</span> {member.phone || 'N/A'}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(member)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(member.id!)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
