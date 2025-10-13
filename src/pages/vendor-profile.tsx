import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import VendorProfileForm from "../components/profile-form";
import '../style/profile.css';

// ============= Main Profile & Settings Component =============
const ProfileSettings: React.FC = () => {
  return (
    <div className="profile-settings-container">
      <Sidebar />

      <div className="main-content">
        <Header vendorName="Double Portion" />

        <div className="content-area">
          <h1 className="page-title">Profile & Settings</h1>

          <VendorProfileForm />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
