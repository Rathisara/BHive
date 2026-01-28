import React, { useState, useEffect } from "react";

function Settings() {
  const [theme, setTheme] = useState(() => localStorage.getItem("appTheme") || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem("appLanguage") || "english");
  const [notifications, setNotifications] = useState(() => 
    JSON.parse(localStorage.getItem("notifications")) || true
  );
  const [fontSize, setFontSize] = useState(() => localStorage.getItem("fontSize") || "medium");

  // Apply theme on mount and when it changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  // Apply language
  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  // Save notifications preference
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  // Apply font size
  useEffect(() => {
    const fontSizeMap = {
      small: "14px",
      medium: "16px",
      large: "18px",
    };
    document.documentElement.style.fontSize = fontSizeMap[fontSize];
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  const handleReset = () => {
    setTheme("light");
    setLanguage("english");
    setNotifications(true);
    setFontSize("medium");
    localStorage.clear();
    alert("Settings reset to default!");
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1>Settings</h1>
        
        <div className="settings-section">
          <h2>⚙️ General Settings</h2>
          
          {/* Theme Settings */}
          <div className="settings-item">
            <label htmlFor="theme-select">
              <span className="settings-label">🎨 Theme</span>
              <select
                id="theme-select"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="settings-select"
              >
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
                <option value="auto">Auto (System)</option>
              </select>
            </label>
            <p className="settings-hint">Choose your preferred color scheme</p>
          </div>

          {/* Language Settings */}
          <div className="settings-item">
            <label htmlFor="language-select">
              <span className="settings-label">🌐 Language</span>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="settings-select"
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी (Hindi)</option>
                <option value="marathi">मराठी (Marathi)</option>
                <option value="tamil">தமிழ் (Tamil)</option>
                <option value="telugu">తెలుగు (Telugu)</option>
              </select>
            </label>
            <p className="settings-hint">Select your preferred language</p>
          </div>

          {/* Font Size Settings */}
          <div className="settings-item">
            <label htmlFor="fontsize-select">
              <span className="settings-label">📝 Font Size</span>
              <select
                id="fontsize-select"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="settings-select"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
            <p className="settings-hint">Adjust text size for better readability</p>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-section">
          <h2>🔔 Notifications</h2>
          
          <div className="settings-item checkbox-item">
            <label htmlFor="notifications-toggle">
              <input
                id="notifications-toggle"
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="settings-checkbox"
              />
              <span className="settings-label">Enable Notifications</span>
            </label>
            <p className="settings-hint">
              {notifications 
                ? "You will receive notifications for important updates"
                : "Notifications are disabled"}
            </p>
          </div>
        </div>

        {/* Customization Section */}
        <div className="settings-section">
          <h2>✨ Customization</h2>
          
          <div className="settings-item">
            <label htmlFor="sidebar-color">
              <span className="settings-label">🎯 Sidebar Accent Color</span>
              <div className="color-picker-container">
                <input
                  id="sidebar-color"
                  type="color"
                  defaultValue="#8B5A3C"
                  onChange={(e) => {
                    document.documentElement.style.setProperty("--sidebar-color", e.target.value);
                    localStorage.setItem("sidebarColor", e.target.value);
                  }}
                  className="settings-color-picker"
                />
                <span className="color-text">Select accent color</span>
              </div>
            </label>
            <p className="settings-hint">Customize the sidebar accent color</p>
          </div>

          <div className="settings-item">
            <label htmlFor="button-style">
              <span className="settings-label">🔘 Button Style</span>
              <select
                id="button-style"
                defaultValue="rounded"
                onChange={(e) => {
                  localStorage.setItem("buttonStyle", e.target.value);
                }}
                className="settings-select"
              >
                <option value="rounded">Rounded</option>
                <option value="square">Square</option>
                <option value="pill">Pill Shaped</option>
              </select>
            </label>
            <p className="settings-hint">Choose button appearance style</p>
          </div>
        </div>

        {/* Information Section */}
        <div className="settings-section info-section">
          <h2>ℹ️ About</h2>
          <p>BHive Teacher Training Platform</p>
          <p>Version 1.0.0</p>
          <p>© 2026 BHive. All rights reserved.</p>
        </div>

        {/* Action Buttons */}
        <div className="settings-actions">
          <button className="settings-btn save-btn" onClick={() => {
            alert("Settings saved successfully!");
          }}>
            💾 Save Changes
          </button>
          <button className="settings-btn reset-btn" onClick={handleReset}>
            🔄 Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
