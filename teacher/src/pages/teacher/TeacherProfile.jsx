import React from "react";
import { useNavigate } from "react-router-dom";

function TeacherProfile() {
  const navigate = useNavigate();

  return (
    <div className="teacher-profile">
      <div className="profile-card">
        <div className="profile-avatar">👨‍🏫</div>
        <h2 className="profile-name">Teacher Name</h2>
        <p className="profile-info">Subject: Mathematics</p>
        <p className="profile-info">Experience: 10 years</p>
        <p className="profile-info">Email: teacher@bhive.edu</p>

        <div className="profile-stats">
          <div className="stat">
            <span className="stat-label">Classes</span>
            <span className="stat-value">3</span>
          </div>
          <div className="stat">
            <span className="stat-label">Students</span>
            <span className="stat-value">135</span>
          </div>
          <div className="stat">
            <span className="stat-label">Rating</span>
            <span className="stat-value">4.8⭐</span>
          </div>
        </div>

        <button className="edit-profile-btn">Edit Profile</button>
        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default TeacherProfile;
