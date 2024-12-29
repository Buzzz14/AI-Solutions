import React from 'react';
import ChangePasswordForm from '../../components/admin/settings/ChangePasswordForm';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>
      
      <ChangePasswordForm />
    </div>
  );
};

export default SettingsPage;