import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import beeTop from "../../assets/teacher_bee_nobg.png";
import dotted from "../../assets/lines1.png";
import studentBee from "../../assets/student_bee_nobg.png";

function Login() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempt:", { email, password, rollNumber, role });
    // Navigate to dashboard or home after successful login
    if (role === "student") {
      navigate("/student-dashboard");
    } else if (role === "teacher") {
      navigate("/teacher-dashboard");
    } else if (role === "NGO") {
      navigate("/ngo-dashboard");
    } else {
      navigate("/");
    }
  };

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

  const isStudent = role === "student";

  return (
    <div className="screen login-screen">
      {/* Dotted Paths */}
      <img src={dotted} className="dotted-path float-slow" style={dotted1} />
      <img src={dotted} className="dotted-path float-slow" style={dotted3} />

      {/* Flying Bee */}
      <img src={beeTop} className="bee-top float-fast" />

      {/* Student Bee - Bottom Left */}
      <img src={studentBee} className="bee-bottom-left-large float-medium" />

      {/* Title */}
      <h1 className="title pop-in">Login</h1>

      {/* Role Badge */}
      <div className="role-badge">
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="login-form">
        {isStudent ? (
          <>
            {/* Student: Roll Number */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="form-input"
              />
            </div>
          </>
        ) : (
          <>
            {/* Teacher/NSGO: Email */}
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>
          </>
        )}

        {/* Password - All Roles */}
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="form-footer">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button type="submit" className="login-btn pulse">
          Login
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="signup-link">
        Don't have an account?{" "}
        <a onClick={() => navigate(`/signup/${role}`)}>Register</a>
      </p>

      {/* Back Button */}
      <button
        className="back-btn-small"
        onClick={() => navigate("/role-select")}
      >
        Back to Role Selection
      </button>
    </div>
  );
}

export default Login;
