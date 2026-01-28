import React, { useState } from "react";

function Dashboard() {
  const [selectedMonth] = useState("October 2023");
  const daysInMonth = 31;
  const attendedDays = [1, 2, 3, 4, 5, 6, 7, 9, 11, 15, 20, 25, 28];

  const renderCalendar = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const isAttended = attendedDays.includes(i);
      days.push(
        <div
          key={i}
          className={`calendar-day ${isAttended ? "attended" : "missed"}`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const performanceMetrics = [
    { label: "Overall Attendance", value: "85.5%", change: "+2.1%", color: "positive" },
    { label: "Subject Scores", value: "88%", change: "+1.2%", color: "positive" },
    { label: "Assignment Completion", value: "92%", change: "+0.5%", color: "positive" },
    { label: "Class Participation", value: "7.5/10", change: "+0.8", color: "positive" },
  ];

  const upcomingLessons = [
    { id: 1, subject: "Mathematics", title: "Quadratic Equations", time: "45 min left", progress: 85 },
    { id: 2, subject: "Science", title: "Photosynthesis Process", time: "2 hrs left", progress: 60 },
    { id: 3, subject: "English", title: "Literature Analysis", time: "4 hrs left", progress: 40, isNew: true },
  ];

  const learningGoals = [
    { id: 1, title: "Complete Mathematics Unit", date: "Dec 20, 2024", status: "On Track", icon: "✅" },
    { id: 2, title: "Finish Science Project", date: "Dec 18, 2024", status: "At Risk", icon: "⚠️" },
    { id: 3, title: "Submit English Essay", date: "Dec 15, 2024", status: "Completed", icon: "✓" },
  ];

  const weeklyStats = [
    { label: "Classes Attended", value: 5, total: 5 },
    { label: "Assignments Submitted", value: 8, total: 10 },
    { label: "Study Hours", value: 12, total: 15 },
  ];

  return (
    <div className="dashboard-page">
      {/* Performance Metrics */}
      <div className="performance-section">
        <div className="section-title">
          <span className="section-icon">📊</span>
          <div>
            <h3>My Performance</h3>
            <p>This Month's Progress</p>
          </div>
        </div>

        <div className="metrics-grid">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <span className="metric-label">{metric.label}</span>
              <div className="metric-value">{metric.value}</div>
              <span className={`metric-change ${metric.color}`}>{metric.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Section */}
      <div className="attendance-section">
        <div className="section-header">
          <div className="attendance-header-content">
            <h2>My Attendance</h2>
            <span className="streak-badge">🔥 5 DAY STREAK!</span>
          </div>
          <p className="attendance-subtitle">Keep it up! You're 8 days away from Silver.</p>
        </div>

        {/* Calendar */}
        <div className="calendar-container">
          <h3 className="calendar-title">📅 {selectedMonth}</h3>
          <div className="calendar-grid">{renderCalendar()}</div>
        </div>
      </div>

      {/* Achievement Milestones Section */}
      <div className="milestones-section">
        <div className="section-header">
          <h2>⭐ Achievement Milestones</h2>
        </div>
        <div className="milestone-progress">
          <span>NEXT SILVER BADGE</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "62.5%" }}></div>
          </div>
          <span>6/16</span>
        </div>

        {/* Badges */}
        <div className="badges-container">
          <div className="badge-card earned">
            <div className="badge-icon">🥉</div>
            <div className="badge-label">Bronze</div>
            <div className="badge-status">Earned</div>
          </div>
          <div className="badge-card">
            <div className="badge-icon">🥈</div>
            <div className="badge-label">Silver</div>
            <div className="badge-status">62%</div>
          </div>
          <div className="badge-card">
            <div className="badge-icon">🥇</div>
            <div className="badge-label">Gold</div>
            <div className="badge-status">0%</div>
          </div>
        </div>
      </div>

      {/* Upcoming Lessons */}
      <div className="upcoming-lessons-section">
        <div className="section-title">
          <span className="section-icon">📚</span>
          <div>
            <h3>Upcoming Lessons</h3>
            <p>Your Learning Schedule</p>
          </div>
        </div>

        <div className="lessons-list">
          {upcomingLessons.map((lesson) => (
            <div key={lesson.id} className="lesson-item">
              <div className="lesson-info">
                <div className="lesson-header">
                  <h4>{lesson.title}</h4>
                  {lesson.isNew && <span className="new-badge">NEW</span>}
                  <span className="lesson-arrow">›</span>
                </div>
                <p className="lesson-meta">{lesson.subject} • {lesson.time}</p>
              </div>
              <div className="lesson-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${lesson.progress}%` }}></div>
                </div>
                <span className="progress-value">{lesson.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        <button className="view-lessons-btn">View All Lessons ›</button>
      </div>

      {/* Learning Goals */}
      <div className="learning-goals-section">
        <div className="section-title">
          <span className="section-icon">🎯</span>
          <h3>Learning Goals</h3>
        </div>

        <div className="goals-list">
          {learningGoals.map((goal) => (
            <div key={goal.id} className="goal-item">
              <div className="goal-icon">{goal.icon}</div>
              <div className="goal-content">
                <h4>{goal.title}</h4>
                <p className="goal-date">{goal.date}</p>
              </div>
              <span className={`goal-status status-${goal.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {goal.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* This Week */}
      <div className="this-week-section student">
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

export default Dashboard;
