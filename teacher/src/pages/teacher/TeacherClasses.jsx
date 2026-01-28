import React from "react";

function TeacherClasses() {
  const classes = [
    {
      id: 1,
      name: "Class 10-A",
      subject: "Mathematics",
      students: 45,
      attendance: 92,
      nextClass: "10:30 AM",
    },
    {
      id: 2,
      name: "Class 10-B",
      subject: "Science",
      students: 42,
      attendance: 88,
      nextClass: "12:00 PM",
    },
    {
      id: 3,
      name: "Class 9-A",
      subject: "English",
      students: 48,
      attendance: 95,
      nextClass: "2:00 PM",
    },
  ];

  return (
    <div className="teacher-classes">
      <h2>My Classes</h2>
      <div className="classes-container">
        {classes.map((cls) => (
          <div key={cls.id} className="class-detail-card">
            <div className="class-header">
              <div>
                <h3>{cls.name}</h3>
                <p className="subject">{cls.subject}</p>
              </div>
              <button className="view-btn">View</button>
            </div>

            <div className="class-stats">
              <div className="stat">
                <span className="label">Students</span>
                <span className="value">{cls.students}</span>
              </div>
              <div className="stat">
                <span className="label">Attendance</span>
                <span className="value">{cls.attendance}%</span>
              </div>
              <div className="stat">
                <span className="label">Next Class</span>
                <span className="value">{cls.nextClass}</span>
              </div>
            </div>

            <div className="progress-bar-class">
              <div className="progress-fill" style={{ width: `${cls.attendance}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherClasses;
