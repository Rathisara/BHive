import React from "react";

function TeacherAnalytics() {
  const performanceData = [
    { class: "Class 10-A", avgScore: 82, trend: "📈" },
    { class: "Class 10-B", avgScore: 78, trend: "📈" },
    { class: "Class 9-A", avgScore: 85, trend: "📊" },
  ];

  return (
    <div className="teacher-analytics">
      <h2>Class Analytics</h2>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Class Performance</h3>
          <div className="performance-list">
            {performanceData.map((data, idx) => (
              <div key={idx} className="performance-item">
                <div className="class-name">{data.class}</div>
                <div className="score-bar">
                  <div className="score-fill" style={{ width: `${data.avgScore}%` }}></div>
                </div>
                <div className="score-details">
                  <span className="score">{data.avgScore}%</span>
                  <span className="trend">{data.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-card">
          <h3>Overall Statistics</h3>
          <div className="stats-overview">
            <div className="stat-item">
              <span className="stat-name">Total Students</span>
              <span className="stat-num">135</span>
            </div>
            <div className="stat-item">
              <span className="stat-name">Avg Attendance</span>
              <span className="stat-num">92%</span>
            </div>
            <div className="stat-item">
              <span className="stat-name">Avg Score</span>
              <span className="stat-num">81%</span>
            </div>
            <div className="stat-item">
              <span className="stat-name">Total Assignments</span>
              <span className="stat-num">12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherAnalytics;
