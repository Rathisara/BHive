import React from "react";

function NGOHome() {
  const studentReportMetrics = [
    { label: "Overall Attendance", value: "89.3%", change: "-0.1%", color: "positive" },
    { label: "Pass Rate", value: "84.7%", change: "-0.5%", color: "positive" },
    { label: "Dropout Rate", value: "3.2%", change: "-0.1%", color: "negative" },
    { label: "Scholarship Recipients", value: "1,245", change: "+80", color: "positive" },
  ];

  const teacherReportMetrics = [
    { label: "Active Teachers", value: "325/342", change: "96% rate", color: "positive" },
    { label: "Training Completion", value: "78.4%", change: "+12.9%", color: "positive" },
    { label: "Avg. Experience", value: "6.2 years", change: "+0.4 yrs", color: "positive" },
    { label: "Certification Rate", value: "92.1%", change: "+3.5%", color: "positive" },
  ];

  const studentMonthlyTrend = [75, 78, 82, 85, 87, 89];
  const maxValue = 100;

  const trainingPrograms = [
    { name: "Digital Teaching", progress: 85 },
    { name: "Child Psychology", progress: 72 },
  ];

  const impactMetrics = [
    { icon: "🎓", value: "2,145", label: "Students Graded", change: "+45" },
    { icon: "📚", value: "45,000", label: "Books Distributed", change: "+29%" },
    { icon: "🎯", value: "156", label: "Programs Launched", change: "+12" },
    { icon: "💰", value: "₹4.2Cr", label: "Funds Allocated", change: "+35%" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Teacher Training Workshop",
      date: "Dec 22, 2024",
      time: "10:00 AM",
      location: "Greenfield Primary",
      badge: "Soon",
      color: "orange"
    },
    {
      id: 2,
      title: "School Infrastructure Audit",
      date: "Dec 24, 2024",
      time: "2:00 PM",
      location: "Multiple Schools",
      badge: "Soon",
      color: "orange"
    },
    {
      id: 3,
      title: "Annual Scholarship Drive",
      date: "Dec 28, 2024",
      time: "8:00 AM",
      location: "All Schools",
      color: "purple"
    },
    {
      id: 4,
      title: "Parent-NGO Meeting",
      date: "Jan 5, 2025",
      time: "4:00 PM",
      location: "Hope Valley School",
      color: "blue"
    },
    {
      id: 5,
      title: "Mid-Year Review",
      date: "Jan 10, 2025",
      time: "11:00 AM",
      location: "HQ Office",
      color: "teal"
    },
  ];

  const policies = [
    {
      id: 1,
      title: "Scholarship Eligibility Update",
      description: "New criteria for merit-based scholarships",
      date: "Dec 19, 2024",
      badges: ["Active", "High"],
    },
    {
      id: 2,
      title: "Teacher Incentive Program",
      description: "Awaiting board approval",
      date: "Dec 20, 2024",
      badges: ["Pending", "Medium"],
    },
    {
      id: 3,
      title: "Digital Classroom Initiative",
      description: "Rollout to 15 schools in Q1 2025",
      date: "Dec 10, 2024",
      badges: ["Approved", "High"],
    },
    {
      id: 4,
      title: "Student Health Checkup",
      description: "Quarterly health camps scheduled",
      date: "Dec 5, 2024",
      badges: ["Active", "Medium"],
    },
  ];

  const quickActions = [
    { icon: "➕", text: "Add New School" },
    { icon: "📅", text: "Schedule Event" },
    { icon: "📋", text: "Create Policy" },
    { icon: "📥", text: "Export Data" },
  ];

  const getColorClass = (color) => {
    const colorMap = {
      orange: "orange-badge",
      purple: "purple-badge",
      blue: "blue-badge",
      teal: "teal-badge",
    };
    return colorMap[color] || "";
  };

  const getEventColor = (color) => {
    const colorMap = {
      orange: "orange-accent",
      purple: "purple-accent",
      blue: "blue-accent",
      teal: "teal-accent",
    };
    return colorMap[color] || "";
  };

  return (
    <div className="ngo-home">
      {/* Student Reports Section */}
      <div className="ngo-report-section">
        <div className="report-header">
          <div className="report-title">
            <span className="report-icon">📊</span>
            <div>
              <h3>Student Reports</h3>
              <p>Performance & Attendance</p>
            </div>
          </div>
        </div>

        <div className="report-metrics">
          {studentReportMetrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <span className="metric-label">{metric.label}</span>
              <div className="metric-value">{metric.value}</div>
              <span className={`metric-change ${metric.color}`}>{metric.change}</span>
            </div>
          ))}
        </div>

        <div className="monthly-trend">
          <h4>Monthly Performance Trend</h4>
          <div className="trend-chart">
            {studentMonthlyTrend.map((value, index) => (
              <div
                key={index}
                className="trend-bar"
                style={{ height: `${(value / maxValue) * 100}%` }}
              ></div>
            ))}
          </div>
        </div>

        <button className="download-report-btn blue">
          ⬇️ Download Report
        </button>
      </div>

      {/* Teacher Reports Section */}
      <div className="ngo-report-section">
        <div className="report-header">
          <div className="report-title">
            <span className="report-icon">👨‍🏫</span>
            <div>
              <h3>Teacher Reports</h3>
              <p>Training & Performance</p>
            </div>
          </div>
        </div>

        <div className="report-metrics">
          {teacherReportMetrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <span className="metric-label">{metric.label}</span>
              <div className="metric-value">{metric.value}</div>
              <span className={`metric-change ${metric.color}`}>{metric.change}</span>
            </div>
          ))}
        </div>

        <div className="training-programs">
          <h4>Training Program Progress</h4>
          {trainingPrograms.map((program, index) => (
            <div key={index} className="training-item">
              <span className="training-name">{program.name}</span>
              <div className="training-bar">
                <div
                  className="training-fill"
                  style={{ width: `${program.progress}%` }}
                ></div>
              </div>
              <span className="training-percent">{program.progress}%</span>
            </div>
          ))}
        </div>

        <button className="download-report-btn purple">
          ⬇️ Download Report
        </button>
      </div>

      {/* Impact Metrics */}
      <div className="impact-metrics-section">
        <div className="impact-header">
          <div className="impact-title">
            <span className="impact-icon">🎯</span>
            <div>
              <h3>Impact Metrics</h3>
              <span className="impact-subtitle">2024 Annual Progress</span>
            </div>
          </div>
          <button className="view-details-btn">View Details</button>
        </div>

        <div className="impact-grid">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="impact-card">
              <span className="impact-card-icon">{metric.icon}</span>
              <div className="impact-card-value">{metric.value}</div>
              <div className="impact-card-label">{metric.label}</div>
              <div className="impact-card-change">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Event Scheduler */}
        <div className="event-scheduler">
          <div className="scheduler-header">
            <span className="scheduler-icon">📅</span>
            <h4>Event Scheduler</h4>
            <span className="add-event-btn">+</span>
          </div>

          <div className="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`event-row ${getEventColor(event.color)}`}>
                <div className="event-date-time">
                  <div className="event-date">📅 {event.date}</div>
                  <div className="event-time">🕐 {event.time}</div>
                  <div className="event-location">📍 {event.location}</div>
                </div>
                <div className="event-title">{event.title}</div>
                {event.badge && (
                  <span className={`event-status-badge ${event.color}`}>
                    {event.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <button className="view-calendar-btn">View Full Calendar</button>
        </div>

        {/* Policies & Decisions */}
        <div className="policies-section">
          <div className="policies-header">
            <span className="policies-icon">📋</span>
            <h3>Policy & Decisions</h3>
            <span className="policies-subtitle">Strategic Actions</span>
          </div>

          <div className="policies-list">
            {policies.map((policy) => (
              <div key={policy.id} className="policy-item">
                <div className="policy-content">
                  <h4>{policy.title}</h4>
                  <p>{policy.description}</p>
                  <span className="policy-date">{policy.date}</span>
                </div>
                <div className="policy-badges">
                  {policy.badges.map((badge, index) => (
                    <span key={index} className={`policy-badge badge-${badge.toLowerCase()}`}>
                      {badge}
                    </span>
                  ))}
                </div>
                <span className="policy-arrow">›</span>
              </div>
            ))}
          </div>

          <button className="view-all-policies-btn">View All Policies ›</button>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-section">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <button key={index} className="quick-action-btn">
                <span className="action-icon">{action.icon}</span>
                <span className="action-text">{action.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NGOHome;
