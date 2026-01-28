import React, { useState } from "react";

function NGOSchools() {
  const [filterActive, setFilterActive] = useState(false);

  const supportedSchoolsStats = [
    { icon: "🏫", value: "47", label: "Supported Schools", change: "+3 this month" },
    { icon: "👥", value: "8,420", label: "Total Students", change: "+245 enrolled" },
    { icon: "👨‍🏫", value: "342", label: "Teachers Supported", change: "96% active" },
    { icon: "📅", value: "28", label: "Upcoming Events", change: "12 this week" },
    { icon: "📋", value: "15", label: "Active Policies", change: "5 pending" },
    { icon: "📈", value: "87%", label: "Impact Score", change: "+5% growth" },
  ];

  const schools = [
    {
      id: 1,
      name: "Greenfield Primary School",
      location: "Mumbai, Maharashtra",
      students: 245,
      teachers: 18,
      attendance: 96,
      fundingUtilized: 85,
      status: "Excellent",
      color: "green",
    },
    {
      id: 2,
      name: "Hope Valley School",
      location: "Nashik, Maharashtra",
      students: 312,
      teachers: 22,
      attendance: 78,
      fundingUtilized: 48,
      status: "Needs Attention",
      color: "red",
    },
    {
      id: 3,
      name: "Bright Academy",
      location: "Nagpur, Maharashtra",
      students: 156,
      teachers: 12,
      attendance: 88,
      fundingUtilized: 92,
      status: "Good",
      color: "blue",
    },
    {
      id: 4,
      name: "Greenfield Primary School",
      location: "Mumbai, Maharashtra",
      students: 245,
      teachers: 18,
      attendance: 96,
      fundingUtilized: 85,
      status: "Good",
      color: "blue",
    },
  ];

  const getStatusColor = (status) => {
    const colorMap = {
      "Excellent": "status-excellent",
      "Needs Attention": "status-needs-attention",
      "Good": "status-good",
    };
    return colorMap[status] || "";
  };

  return (
    <div className="ngo-schools">
      {/* Header with Filter and Add Button */}
      <div className="schools-header">
        <div className="schools-title">
          <span className="schools-icon">🏫</span>
          <h2>Supported Schools</h2>
          <span className="schools-subtitle">Real-time status monitoring</span>
        </div>
        <div className="schools-controls">
          <button
            className={`filter-btn ${filterActive ? "active" : ""}`}
            onClick={() => setFilterActive(!filterActive)}
          >
            🔽 Filter
          </button>
          <button className="add-school-btn">+ Add School</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="schools-stats-grid">
        {supportedSchoolsStats.map((stat, index) => (
          <div key={index} className="school-stat-card">
            <div className="stat-icon-box">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-change">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Schools List */}
      <div className="schools-list">
        {schools.map((school) => (
          <div key={school.id} className={`school-card ${getStatusColor(school.status)}`}>
            {/* School Header */}
            <div className="school-card-header">
              <div className="school-name-section">
                <h3>{school.name}</h3>
                <p className="school-location">📍 {school.location}</p>
              </div>
              <span className={`school-status-badge status-${school.color}`}>
                {school.status}
              </span>
            </div>

            {/* School Stats */}
            <div className="school-stats">
              <div className="school-stat-item">
                <span className="stat-icon">👥</span>
                <div className="stat-info">
                  <div className="stat-count">{school.students}</div>
                  <div className="stat-name">Students</div>
                </div>
              </div>
              <div className="school-stat-item">
                <span className="stat-icon">👨‍🏫</span>
                <div className="stat-info">
                  <div className="stat-count">{school.teachers}</div>
                  <div className="stat-name">Teachers</div>
                </div>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="school-progress-section">
              <div className="progress-item">
                <div className="progress-label">
                  <span>Attendance Rate</span>
                  <span className="progress-value">{school.attendance}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill attendance-fill"
                    style={{ width: `${school.attendance}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Funding Utilized</span>
                  <span className="progress-value">{school.fundingUtilized}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill funding-fill"
                    style={{ width: `${school.fundingUtilized}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* School Actions */}
            <div className="school-actions">
              <button className="school-action-icon" title="Edit">
                ✏️
              </button>
              <button className="school-action-icon" title="View Details">
                👁️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Schools Button */}
      <button className="view-all-schools-btn">View All 47 Schools</button>
    </div>
  );
}

export default NGOSchools;
