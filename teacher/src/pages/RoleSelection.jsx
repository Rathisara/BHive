import React from "react";
import { useNavigate } from "react-router-dom";
import beeTop from "../../assets/teacher_bee_nobg.png";
import dotted from "../../assets/lines1.png";
import beeeee from "../../assets/beeeee.png";
import teacherBee from "../../assets/teacher_bee_nobg.png";
import studentBee from "../../assets/student_bee_nobg.png";

function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      id: "NGO",
      label: "I'm a NGO",
      icon: beeeee,
      description: "Non-Governmental Organization",
    },
    {
      id: "teacher",
      label: "I'm a Teacher",
      icon: teacherBee,
      description: "Educator",
    },
    {
      id: "student",
      label: "I'm a Student",
      icon: studentBee,
      description: "Learner",
    },
  ];

  const handleRoleSelect = (roleId) => {
    navigate(`/login/${roleId}`);
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

  return (
    <div className="screen">
      {/* Dotted Paths */}
      <img src={dotted} className="dotted-path float-slow" style={dotted1} />
      <img src={dotted} className="dotted-path float-slow" style={dotted3} />

      {/* Flying Bee */}
      <img src={beeTop} className="bee-top float-fast" />

      {/* Student Bee - Bottom Left */}
      <img src={studentBee} className="bee-bottom-left float-medium" />

      {/* Title */}
      <h1 className="title pop-in">Select Your Role</h1>

      {/* Role Selection Grid */}
      <div className="role-grid">
        {roles.map((role) => (
          <div
            key={role.id}
            className="role-card"
            onClick={() => handleRoleSelect(role.id)}
          >
            <img src={role.icon} alt={role.label} className="role-icon-img" />
            <div className="role-label">{role.label}</div>
            <div className="role-description">{role.description}</div>
          </div>
        ))}
      </div>

      {/* Selection Button */}
      <div className="button-group">
        {/* Back Button */}
        <button
          className="start-btn pulse"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;
