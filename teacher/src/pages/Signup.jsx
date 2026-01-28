import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import beeTop from "../../assets/teacher_bee_nobg.png";
import dotted from "../../assets/lines1.png";
import studentBee from "../../assets/student_bee_nobg.png";

function Signup() {
  const { role } = useParams();
  const normalizedRole = role?.toLowerCase();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    rollNumber: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your signup logic here
    console.log("Signup attempt:", { ...formData, role: normalizedRole });
    
    // Redirect to respective dashboard based on role
    const dashboardRoutes = {
      student: "/student-dashboard",
      teacher: "/teacher-dashboard",
      ngo: "/ngo-dashboard",
    };
    
    const redirectPath = dashboardRoutes[normalizedRole];
    console.log("Redirect path:", redirectPath, "Role:", normalizedRole);
    if (redirectPath) {
      navigate(redirectPath);
    } else {
      alert("Invalid role or redirect path not found");
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

  const isStudent = normalizedRole === "student";

  return (
    <div className="screen signup-screen">
      {/* Dotted Paths */}
      <img src={dotted} className="dotted-path float-slow" style={dotted1} />
      <img src={dotted} className="dotted-path float-slow" style={dotted3} />

      {/* Flying Bee */}
      <img src={beeTop} className="bee-top float-fast" />

      {/* Student Bee - Bottom Left */}
      <img src={studentBee} className="bee-bottom-left-large float-medium" />

      {/* Title */}
      <h1 className="title pop-in">Register</h1>

      {/* Role Badge */}
      <div className="role-badge">
        {normalizedRole.charAt(0).toUpperCase() + normalizedRole.slice(1)}
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSignup} className="signup-form">
        {/* Name */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {isStudent ? (
          <>
            {/* Student: Roll Number */}
            <div className="form-group">
              <input
                type="text"
                name="rollNumber"
                placeholder="Roll Number"
                value={formData.rollNumber}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </>
        ) : (
          <>
            {/* Teacher/NSGO: Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </>
        )}

        {/* Phone */}
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Register Button */}
        <button type="submit" className="signup-btn pulse">
          Register
        </button>
      </form>

      {/* Login Link */}
      <p className="login-link">
        Already have an account?{" "}
        <a onClick={() => navigate(`/login/${normalizedRole}`)}>Login</a>
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

export default Signup;
