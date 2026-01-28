import React from "react";
import { useNavigate } from "react-router-dom";

function NGOProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="ngo-profile">
      <div className="ngo-profile-card">
        <div className="ngo-avatar">🏢</div>
        <h2 className="ngo-name">Education For All</h2>
        <p className="ngo-type">Non-Governmental Organization</p>

        <div className="ngo-info-section">
          <div className="ngo-info-item">
            <span className="ngo-info-label">Headquarters</span>
            <span className="ngo-info-value">Mumbai, Maharashtra</span>
          </div>
          <div className="ngo-info-item">
            <span className="ngo-info-label">Founded</span>
            <span className="ngo-info-value">2015</span>
          </div>
          <div className="ngo-info-item">
            <span className="ngo-info-label">Schools Supported</span>
            <span className="ngo-info-value">47</span>
          </div>
          <div className="ngo-info-item">
            <span className="ngo-info-label">Students Impacted</span>
            <span className="ngo-info-value">8,420</span>
          </div>
          <div className="ngo-info-item">
            <span className="ngo-info-label">Contact</span>
            <span className="ngo-info-value">contact@educationforall.org</span>
          </div>
        </div>

        <div className="ngo-profile-actions">
          <button className="ngo-edit-btn">Edit Profile</button>
          <button className="ngo-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default NGOProfile;
