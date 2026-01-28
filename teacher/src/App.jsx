import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import beeLogo from "../assets/bee1.png";
import beeTop from "../assets/teacher_bee_nobg.png";
import beeBottom from "../assets/student_bee_nobg.png";
import dotted from "../assets/lines1.png";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fixed positions for specific corners
  const dotted1 = {
    top: "10px",
    left: "10px",
    transform: "rotate(0deg)",
  };

  const dotted3 = {
    bottom: "20px",
    right: "20px",
    top: "auto",
    left: "auto",
    transform: "rotate(0deg) scaleX(-1)",
  };

  const handleGetStarted = () => {
    navigate("/role-select");
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="screen">
        {/* Dotted Paths */}
        <img src={dotted} className="dotted-path float-slow" style={dotted1} />
        <img src={dotted} className="dotted-path float-slow" style={dotted3} />

        {/* Flying Bee */}
        <img src={beeTop} className="bee-top float-fast" />

        {/* Badge */}
        <div className="hero-badge pop-in">
          <img src={beeLogo} alt="Bee" className="badge-bee-icon" />
          <span className="badge-text">For DIETs & SCERTs</span>
        </div>

        {/* Title */}
        <h1 className="title pop-in">Teacher Training is Broken</h1>

        {/* Description */}
        <p className="hero-description slide-in">
          DIETs and SCERTs conduct large-scale trainings that are generic, outdated, and disconnected from real classroom needs. Teachers receive the same content regardless of their skill level, region, or language.
        </p>

        {/* Reading Bee */}
        <img src={beeBottom} className="bee-bottom float-medium" />

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="start-btn pulse" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="section-container">
          <h2>The Problem</h2>
          <p className="section-subtitle">Why Current Training Falls Short</p>
          
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">📊</div>
              <h3>No Real-Time Data</h3>
              <p>Training decisions are made without access to actual classroom performance data, learning outcomes, or teacher needs assessments.</p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>Irrelevant Training</h3>
              <p>Teachers attend sessions that don't address their specific challenges, skill gaps, or the unique context of their classrooms.</p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon">🔧</div>
              <h3>No Customization</h3>
              <p>Training content ignores regional languages, local curriculum needs, and varying teacher experience levels across different clusters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-container">
          <h2>The Solution</h2>
          <p className="section-subtitle">Intelligent Training That Adapts & Evolves</p>
          
          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-icon">⚡</div>
              <h3>Rapid Adaptation</h3>
              <p>Modules update automatically based on latest educational research and policy changes.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">🧩</div>
              <h3>Micro-Learning</h3>
              <p>Content broken into small, digestible lessons that fit into busy teacher schedules.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">📈</div>
              <h3>Data-Driven</h3>
              <p>Real classroom performance data informs training priorities and content.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🌐</div>
              <h3>Localized</h3>
              <p>Supports multiple languages and adapts to regional curriculum needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2>Key Benefits</h2>
          <p className="section-subtitle">Transform Teacher Development</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>✨ Personalized Training Paths</h3>
              <p>AI analyzes each teacher's strengths, gaps, and classroom context to create individualized learning journeys that maximize impact.</p>
            </div>
            
            <div className="feature-card">
              <h3>🔄 Real-Time Content Updates</h3>
              <p>Training materials evolve continuously based on policy changes, new research, and feedback from the field.</p>
            </div>
            
            <div className="feature-card">
              <h3>📊 Data-Driven Decisions</h3>
              <p>Comprehensive dashboards help DIETs and SCERTs track progress, identify trends, and allocate resources effectively.</p>
            </div>

            <div className="feature-card">
              <h3>🎯 Practical & Relevant</h3>
              <p>Every module is designed around real classroom scenarios, ensuring teachers can immediately apply what they learn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>10x</h3>
              <p>Faster Updates</p>
            </div>
            
            <div className="stat-card">
              <h3>95%</h3>
              <p>Teacher Satisfaction</p>
            </div>
            
            <div className="stat-card">
              <h3>500+</h3>
              <p>Training Modules</p>
            </div>

            <div className="stat-card">
              <h3>12</h3>
              <p>Languages Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Transform?</h2>
          <p>Build the Future of Teacher Training</p>
          <p className="cta-description">Join DIETs and SCERTs across India in revolutionizing how teachers learn, grow, and transform classrooms.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={handleGetStarted}>Get Started</button>
            <button className="cta-btn secondary">Schedule Demo</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <h3>BHive</h3>
            <p>Empowering teacher training with intelligent, adaptive learning solutions for DIETs and SCERTs.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#cases">Case Studies</a></li>
                <li><a href="#docs">Documentation</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 BHive. All rights reserved.</p>
          <p>Made with ❤️ for Indian Education</p>
        </div>
      </footer>
    </>
  );
}

export default App;

