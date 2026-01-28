import React from "react";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">👤</div>
        <h2 className="profile-name">Student Name</h2>
        <p className="profile-info">Roll Number: 12345</p>
        <p className="profile-info">Class: 10-A</p>

        <div className="profile-stats">
          <div className="stat">
            <span className="stat-label">Stars Earned</span>
            <span className="stat-value">450</span>
          </div>
          <div className="stat">
            <span className="stat-label">Days Active</span>
            <span className="stat-value">45</span>
          </div>
          <div className="stat">
            <span className="stat-label">Badges</span>
            <span className="stat-value">3</span>
          </div>
        </div>

        <button className="edit-profile-btn">Edit Profile</button>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Profile;
