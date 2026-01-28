import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NGOHome from "./ngo/NGOHome";
import NGOSchools from "./ngo/NGOSchools";
import NGOAnalytics from "./ngo/NGOAnalytics";
import NGOEvents from "./ngo/NGOEvents";
import NGOProfile from "./ngo/NGOProfile";
import Settings from "./Settings";

function NGODashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <NGOHome />;
      case "schools":
        return <NGOSchools />;
      case "analytics":
        return <NGOAnalytics />;
      case "events":
        return <NGOEvents />;
      case "profile":
        return <NGOProfile />;
      case "settings":
        return <Settings />;
      default:
        return <NGOHome />;
    }
  };

  return (
    <div className="ngo-dashboard">
      {/* Left Navigation Sidebar */}
      <div className="ngo-nav-sidebar">
        <button
          className={`ngo-nav-btn ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
          title="Home"
        >
          <span className="ngo-nav-icon">🏠</span>
          <span>HOME</span>
        </button>
        <button
          className={`ngo-nav-btn ${activeTab === "schools" ? "active" : ""}`}
          onClick={() => setActiveTab("schools")}
          title="Schools"
        >
          <span className="ngo-nav-icon">🏫</span>
          <span>SCHOOLS</span>
        </button>
        <button
          className={`ngo-nav-btn ${activeTab === "analytics" ? "active" : ""}`}
          onClick={() => setActiveTab("analytics")}
          title="Analytics"
        >
          <span className="ngo-nav-icon">📊</span>
          <span>ANALYTICS</span>
        </button>
        <button
          className={`ngo-nav-btn ${activeTab === "events" ? "active" : ""}`}
          onClick={() => setActiveTab("events")}
          title="Events"
        >
          <span className="ngo-nav-icon">📅</span>
          <span>EVENTS</span>
        </button>
        <button
          className={`ngo-nav-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
          title="Profile"
        >
          <span className="ngo-nav-icon">👤</span>
          <span>PROFILE</span>
        </button>

        {/* Settings Button */}
        <button
          className="ngo-nav-btn"
          onClick={() => setActiveTab("settings")}
          title="Settings"
        >
          <span className="ngo-nav-icon">⚙️</span>
          <span>SETTINGS</span>
        </button>

        {/* Logout Button at Bottom */}
        <button
          className="ngo-nav-btn logout-btn"
          onClick={() => navigate("/role-select")}
          title="Logout"
        >
          <span>LOGOUT</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="ngo-main-content">{renderPage()}</div>
    </div>
  );
}

export default NGODashboard;
