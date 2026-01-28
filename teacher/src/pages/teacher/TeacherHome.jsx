import React, { useState } from "react";

function TeacherHome() {
  const [filterActive, setFilterActive] = useState(false);

  const students = [
    { id: 1, initials: "EC", name: "Emily Chen", status: "present" },
    { id: 2, initials: "MJ", name: "Marcus Johnson", status: "present" },
    { id: 3, initials: "SW", name: "Sarah Williams", status: "absent" },
    { id: 4, initials: "DK", name: "David Kim", status: "present" },
    { id: 5, initials: "OM", name: "Olivia Martinez", status: "pending" },
    { id: 6, initials: "JB", name: "James Brown", status: "present" },
  ];

  const insights = [
    {
      id: 1,
      icon: "💡",
      title: "Engagement Tip",
      description: "Consider using more visual aids in Period 2. Students show 23% better retention.",
      badge: "High"
    },
    {
      id: 2,
      icon: "📈",
      title: "Performance Insight",
      description: "Grade 10A is excelling in algebra. Ready for advanced concepts.",
      badge: ""
    },
    {
      id: 3,
      icon: "🎯",
      title: "Focus Area",
      description: "3 students may need extra help with quadratic equations this week.",
      badge: "High"
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Classroom Management 2024",
      category: "Leadership",
      duration: "45 min left",
      progress: 85
    },
    {
      id: 2,
      title: "Digital Assessment Tools",
      category: "Technology",
      duration: "2 hrs left",
      progress: 60
    },
    {
      id: 3,
      title: "Inclusive Teaching Practices",
      category: "Pedagogy",
      duration: "4 hrs",
      progress: 0,
      isNew: true
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      description: "Grade 10A • Room 204",
      time: "09:00 AM",
      color: "blue",
      badge: "Today"
    },
    {
      id: 2,
      title: "Staff Development",
      description: "Professional Learning",
      time: "02:30 PM",
      color: "purple",
      badge: "Today"
    },
    {
      id: 3,
      title: "Math Assessment",
      description: "Grade 10A, 10B",
      time: "Tomorrow",
      color: "green"
    },
    {
      id: 4,
      title: "End of Semester",
      description: "Report Cards Due",
      time: "Dec 28",
      color: "red"
    },
  ];

  const alerts = [
    {
      id: 1,
      title: "Grade Submission Deadline",
      description: "Semester grades due by Dec 20",
      daysLeft: "3 days left",
      severity: "warning"
    },
    {
      id: 2,
      title: "Student Absence Alert",
      description: "Sarah Williams - 3rd consecutive absence",
      time: "Today",
      severity: "info"
    },
    {
      id: 3,
      title: "New Resource Available",
      description: "Updated curriculum materials for Q2",
      time: "2 hours ago",
      severity: "success"
    },
  ];

  const weeklyStats = [
    { label: "Classes Completed", value: 24, total: 32 },
    { label: "Assignments Graded", value: 156, total: 180 },
    { label: "Student Check-ins", value: 42, total: 50 },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "present":
        return "✅";
      case "absent":
        return "❌";
      case "pending":
        return "⏱️";
      default:
        return "";
    }
  };

  return (
    <div className="teacher-home">
      {/* Quick Attendance */}
      <div className="quick-attendance-section">
        <div className="attendance-header">
          <div className="attendance-title">
            <span className="attendance-icon">👥</span>
            <div>
              <h3>Quick Attendance</h3>
              <p>Period 3 - Grade 10A Math</p>
            </div>
          </div>
          <button className="mark-all-btn">Mark All Present</button>
        </div>

        <div className="students-list">
          {students.map((student) => (
            <div key={student.id} className="student-item">
              <div className="student-avatar">{student.initials}</div>
              <span className="student-name">{student.name}</span>
              <div className="student-status-icons">
                <button className={`status-btn ${student.status === "present" ? "active" : ""}`}>
                  {student.status === "present" ? "✅" : "⭕"}
                </button>
                <button className="status-btn">⏱️</button>
                <button className={`status-btn ${student.status === "absent" ? "active" : ""}`}>
                  {student.status === "absent" ? "❌" : "✕"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-btn">View All Students (32)</button>
      </div>

      {/* AI Teaching Assistant */}
      <div className="ai-assistant-section">
        <div className="ai-header">
          <div className="ai-title">
            <span className="ai-icon">⭐</span>
            <div>
              <h3>AI Teaching Assistant</h3>
              <p>Insights & tips</p>
            </div>
          </div>
          <span className="new-tips-badge">New Tips</span>
        </div>

        <div className="insights-grid">
          {insights.map((insight) => (
            <div key={insight.id} className="insight-card">
              <div className="insight-header">
                <span className="insight-icon">{insight.icon}</span>
                {insight.badge && <span className={`insight-badge ${insight.badge.toLowerCase()}`}>{insight.badge}</span>}
              </div>
              <h4>{insight.title}</h4>
              <p>{insight.description}</p>
            </div>
          ))}
        </div>

        <button className="view-insights-btn">View All Insights →</button>
      </div>

      {/* Your Learning Path */}
      <div className="learning-path-section">
        <div className="learning-header">
          <div>
            <span className="learning-icon">🎓</span>
            <h3>Your Learning Path</h3>
            <p>Professional Development</p>
          </div>
          <div className="learning-progress">
            <span className="progress-percent">67%</span>
            <span className="progress-label">Complete</span>
          </div>
        </div>

        <div className="courses-list">
          {courses.map((course) => (
            <div key={course.id} className="course-item">
              <div className="course-info">
                <div className="course-header">
                  <h4>{course.title}</h4>
                  {course.isNew && <span className="new-badge">NEW</span>}
                  <span className="course-arrow">›</span>
                </div>
                <p className="course-meta">{course.category} • {course.duration}</p>
              </div>
              <div className="course-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                </div>
                <span className="progress-value">{course.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        <button className="browse-courses-btn">Browse All Courses ›</button>
      </div>

      {/* Upcoming Events & Alerts */}
      <div className="events-alerts-container">
        {/* Upcoming Events */}
        <div className="upcoming-events-section">
          <div className="section-header">
            <span className="section-icon">📅</span>
            <h3>Upcoming Events</h3>
          </div>

          <div className="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-item">
                <div className={`event-color-bar ${event.color}`}></div>
                <div className="event-content">
                  <h4>{event.title}</h4>
                  <p className="event-desc">{event.description}</p>
                  <p className="event-time">{event.time}</p>
                </div>
                {event.badge && <span className="event-badge">{event.badge}</span>}
              </div>
            ))}
          </div>

          <button className="view-calendar-btn">View Full Calendar</button>
        </div>

        {/* Alerts & Notices */}
        <div className="alerts-section">
          <div className="section-header">
            <span className="section-icon">⚠️</span>
            <h3>Alerts & Notices</h3>
          </div>

          <div className="alerts-list">
            {alerts.map((alert) => (
              <div key={alert.id} className={`alert-item ${alert.severity}`}>
                <h4>{alert.title}</h4>
                <p>{alert.description}</p>
                <span className="alert-time">{alert.daysLeft || alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* This Week */}
      <div className="this-week-section">
        <div className="week-header">
          <span className="week-icon">📊</span>
          <h3>This Week</h3>
        </div>

        <div className="week-stats">
          {weeklyStats.map((stat, index) => (
            <div key={index} className="week-stat">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(stat.value / stat.total) * 100}%` }}></div>
                </div>
              </div>
              <div className="stat-count">{stat.value}/{stat.total}</div>
            </div>
          ))}
        </div>

        <button className="detailed-report-btn">View Detailed Report</button>
      </div>
    </div>
  );
}

export default TeacherHome;
