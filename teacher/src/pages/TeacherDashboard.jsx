import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherHome from "./teacher/TeacherHome";
import TeacherClasses from "./teacher/TeacherClasses";
import TeacherAssignments from "./teacher/TeacherAssignments";
import TeacherAnalytics from "./teacher/TeacherAnalytics";
import TeacherProfile from "./teacher/TeacherProfile";
import Settings from "./Settings";

function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <TeacherHome />;
      case "classes":
        return <TeacherClasses />;
      case "assignments":
        return <TeacherAssignments />;
      case "analytics":
        return <TeacherAnalytics />;
      case "profile":
        return <TeacherProfile />;
      case "settings":
        return <Settings />;
      default:
        return <TeacherHome />;
    }
  };

  return (
    <div className="teacher-dashboard">
      {/* Left Navigation Sidebar */}
      <div className="teacher-nav-sidebar">
        <button
          className={`teacher-nav-btn ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
          title="Home"
        >
          <span className="teacher-nav-icon">🏠</span>
          <span>HOME</span>
        </button>
        <button
          className={`teacher-nav-btn ${activeTab === "classes" ? "active" : ""}`}
          onClick={() => setActiveTab("classes")}
          title="Classes"
        >
          <span className="teacher-nav-icon">🏫</span>
          <span>CLASSES</span>
        </button>
        <button
          className={`teacher-nav-btn ${activeTab === "assignments" ? "active" : ""}`}
          onClick={() => setActiveTab("assignments")}
          title="Assignments"
        >
          <span className="teacher-nav-icon">📝</span>
          <span>ASSIGNMENTS</span>
        </button>
        <button
          className={`teacher-nav-btn ${activeTab === "analytics" ? "active" : ""}`}
          onClick={() => setActiveTab("analytics")}
          title="Analytics"
        >
          <span className="teacher-nav-icon">📊</span>
          <span>ANALYTICS</span>
        </button>
        <button
          className={`teacher-nav-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
          title="Profile"
        >
          <span className="teacher-nav-icon">👤</span>
          <span>PROFILE</span>
        </button>

        {/* Settings Button */}
        <button
          className="teacher-nav-btn"
          onClick={() => setActiveTab("settings")}
          title="Settings"
        >
          <span className="teacher-nav-icon">⚙️</span>
          <span>SETTINGS</span>
        </button>

        {/* Logout Button at Bottom */}
        <button
          className="teacher-nav-btn logout-btn"
          onClick={() => navigate("/role-select")}
          title="Logout"
        >
          <span>LOGOUT</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="teacher-main-content">{renderPage()}</div>
    </div>
  );
}

export default TeacherDashboard;
