import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./student/Dashboard";
import Badges from "./student/Badges";
import Learn from "./student/Learn";
import Feedback from "./student/Feedback";
import Profile from "./student/Profile";
import Settings from "./Settings";
import beeIcon from "../../assets/bee1.png";

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <Dashboard />;
      case "badges":
        return <Badges />;
      case "learn":
        return <Learn />;
      case "feedback":
        return <Feedback />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="student-dashboard">
      {/* Left Navigation Sidebar */}
      <div className="student-nav-sidebar">
        <button
          className={`student-nav-btn ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
          title="Home"
        >
          <span className="student-nav-icon">🏠</span>
          <span>HOME</span>
        </button>
        <button
          className={`student-nav-btn ${activeTab === "badges" ? "active" : ""}`}
          onClick={() => setActiveTab("badges")}
          title="Badges"
        >
          <span className="student-nav-icon">⭐</span>
          <span>BADGES</span>
        </button>
        <button
          className={`student-nav-btn ${activeTab === "learn" ? "active" : ""}`}
          onClick={() => setActiveTab("learn")}
          title="Learn"
        >
          <span className="student-nav-icon">🐝</span>
          <span>LEARN</span>
        </button>
        <button
          className={`student-nav-btn ${activeTab === "feedback" ? "active" : ""}`}
          onClick={() => setActiveTab("feedback")}
          title="Feedback"
        >
          <span className="student-nav-icon">📝</span>
          <span>FEEDBACK</span>
        </button>
        <button
          className={`student-nav-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
          title="Profile"
        >
          <span className="student-nav-icon">👤</span>
          <span>PROFILE</span>
        </button>

        {/* Settings Button */}
        <button
          className="student-nav-btn"
          onClick={() => setActiveTab("settings")}
          title="Settings"
        >
          <span className="student-nav-icon">⚙️</span>
          <span>SETTINGS</span>
        </button>

        {/* Logout Button at Bottom */}
        <button
          className="student-nav-btn logout-btn"
          onClick={() => navigate("/role-select")}
          title="Logout"
        >
          <span>LOGOUT</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="student-main-content">{renderPage()}</div>
    </div>
  );
}

export default StudentDashboard;
