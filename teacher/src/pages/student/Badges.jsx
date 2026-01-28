import React, { useState } from "react";

function Badges() {
  const [selectedTab, setSelectedTab] = useState("stalls");

  const rewards = [
    {
      id: 1,
      name: "Canteen Coupon",
      icon: "🍔",
      status: "Almost there, keep going!",
      starsRequired: 250,
      starsEarned: 200,
      category: "stalls",
      isLocked: true,
    },
    {
      id: 2,
      name: "Extra Library Time",
      icon: "📚",
      status: "Ready to Claim!",
      starsRequired: 100,
      starsEarned: 100,
      category: "stalls",
      isLocked: false,
    },
    {
      id: 3,
      name: "Mystery Reward Unlocks at 1000 Stars",
      icon: "🎁",
      status: "Coming Soon",
      starsRequired: 1000,
      starsEarned: 450,
      category: "stalls",
      isLocked: true,
    },
    {
      id: 4,
      name: "Premium Learning Access",
      icon: "🎓",
      status: "In Progress",
      starsRequired: 500,
      starsEarned: 320,
      category: "exclusive",
      isLocked: true,
    },
  ];

  const filteredRewards =
    selectedTab === "stalls"
      ? rewards.filter((r) => r.category === "stalls")
      : rewards.filter((r) => r.category === "exclusive");

  return (
    <div className="badges-page">
      {/* Header with Back Button and Stars */}
      <div className="badges-header">
        <button className="back-btn-badges">{"<"}</button>
        <h2 className="badges-title">My Nectar Chest</h2>
        <div className="stars-counter-badges">
          <span className="stars-icon">⭐</span>
          <span className="stars-text">450 Stars</span>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={`tab-btn ${selectedTab === "stalls" ? "active" : ""}`}
          onClick={() => setSelectedTab("stalls")}
        >
          School Perks
        </button>
        <button
          className={`tab-btn ${selectedTab === "exclusive" ? "active" : ""}`}
          onClick={() => setSelectedTab("exclusive")}
        >
          Badges
        </button>
      </div>

      {/* Market Stalls Section */}
      <div className="market-stalls-section">
        <h3 className="section-title">Market Stalls</h3>

        {/* Rewards Grid - Horizontal */}
        <div className="rewards-grid-horizontal">
          {filteredRewards.map((reward) => (
            <div key={reward.id} className="reward-card-small">
              <div className="reward-icon-small">{reward.icon}</div>
              <h3 className="reward-name-small">{reward.name}</h3>
              <p className="reward-status-small">{reward.status}</p>

              {/* Stars Info */}
              <div className="stars-info">
                <span className="stars-icon-small">⭐</span>
                <span className="stars-required">{reward.starsRequired}</span>
              </div>

              {/* Progress Bar */}
              <div className="progress-bar-small">
                <div
                  className="progress-fill-small"
                  style={{
                    width: `${(reward.starsEarned / reward.starsRequired) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Stars Progress Text */}
              <p className="progress-text-small">
                {reward.starsEarned}/{reward.starsRequired} Stars
              </p>

              {/* Action Button */}
              {reward.isLocked ? (
                <button className="action-btn-locked">🔒 Locked</button>
              ) : (
                <button className="action-btn-unlock">Redeem</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Badges;
