import React, { useState } from "react";

function Feedback() {
  const [selectedTab, setSelectedTab] = useState("pending");

  const feedbackData = [
    {
      id: 1,
      teacherName: "Dr. Sarah Simkins",
      subject: "Advanced Macroeconomics",
      rating: 4.8,
      status: "pending",
      reviews: 3,
      totalReviews: 12,
    },
    {
      id: 2,
      teacherName: "Prof. Marcus Thorns",
      subject: "Core Data Ethics & Privacy",
      rating: 4.2,
      status: "pending",
      reviews: 12,
      totalReviews: 12,
    },
    {
      id: 3,
      teacherName: "Dr. Katrina Vogt",
      subject: "Behavioral Psych",
      rating: 4.9,
      status: "pending",
      reviews: 12,
      totalReviews: 12,
    },
  ];

  const pendingReviews = feedbackData.filter((f) => f.status === "pending");
  const completedReviews = feedbackData.filter((f) => f.status === "completed");

  return (
    <div className="feedback-page">
      {/* Search Bar */}
      <div className="feedback-search">
        <input
          type="text"
          placeholder="Search teachers or subjects..."
          className="search-input"
        />
      </div>

      {/* Stats Cards */}
      <div className="feedback-stats">
        <div className="stat-card pending">
          <span className="stat-icon">📋</span>
          <div className="stat-content">
            <span className="stat-number">3</span>
            <span className="stat-label">PENDING REVIEWS</span>
          </div>
        </div>
        <div className="stat-card completed">
          <span className="stat-icon">✅</span>
          <div className="stat-content">
            <span className="stat-number">12</span>
            <span className="stat-label">TOTAL HISTORY</span>
          </div>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="feedback-tabs">
        <button
          className={`feedback-tab ${selectedTab === "pending" ? "active" : ""}`}
          onClick={() => setSelectedTab("pending")}
        >
          Pending Reviews
        </button>
        <button
          className={`feedback-tab ${selectedTab === "completed" ? "active" : ""}`}
          onClick={() => setSelectedTab("completed")}
        >
          Past Reviews
        </button>
      </div>

      {/* Feedback List */}
      <div className="feedback-list">
        {(selectedTab === "pending" ? pendingReviews : completedReviews).map(
          (feedback) => (
            <div key={feedback.id} className="feedback-item">
              <div className="feedback-header">
                <div className="teacher-info">
                  <div className="teacher-avatar">👨‍🏫</div>
                  <div className="teacher-details">
                    <h3 className="teacher-name">{feedback.teacherName}</h3>
                    <p className="teacher-subject">{feedback.subject}</p>
                  </div>
                </div>
                <div className="feedback-rating">
                  <span className="star">⭐</span>
                  <span className="rating">{feedback.rating}</span>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="rating-bars">
                <div className="rating-bar">
                  <div className="bar-fill" style={{ width: "90%" }}></div>
                </div>
                <div className="rating-bar">
                  <div className="bar-fill" style={{ width: "80%" }}></div>
                </div>
                <div className="rating-bar">
                  <div className="bar-fill" style={{ width: "70%" }}></div>
                </div>
                <div className="rating-bar">
                  <div className="bar-fill" style={{ width: "60%" }}></div>
                </div>
              </div>

              <button className="start-feedback-btn">Start Feedback ›</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Feedback;
