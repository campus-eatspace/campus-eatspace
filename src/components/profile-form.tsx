import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from './form-input';
import '../style/profile.css';

// ============= Vendor Profile Form Component =============
const VendorProfileForm: React.FC = () => {
  const [vendorName, setVendorName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [operatingHours, setOperatingHours] = useState('');

  const handleUpdate = () => {
    console.log('Update clicked', { vendorName, phoneNumber, operatingHours });
    // Add your update logic here
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this vendor?');
    if (confirmDelete) {
      console.log('Delete vendor');
      // Add your delete logic here
    }
  };

  return (
    <div className="vendor-profile-section">
      <h2 className="section-title">Vendor Profile</h2>
      
      <div className="profile-form">
        <FormInput
          label="Vendor Name"
          value={vendorName}
          onChange={setVendorName}
        />

        <FormInput
          label="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <FormInput
          label="Operating Hours"
          value={operatingHours}
          onChange={setOperatingHours}
        />

        <div className="form-actions">
          <button className="btn-update" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn-delete" onClick={handleDelete}>
            Delete Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorProfileForm;