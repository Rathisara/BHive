import React from "react";

function TeacherAssignments() {
  const assignments = [
    { id: 1, title: "Math Worksheet 5", class: "Class 10-A", dueDate: "2026-02-05", submitted: 38, total: 45 },
    { id: 2, title: "Science Project", class: "Class 10-B", dueDate: "2026-02-10", submitted: 35, total: 42 },
    { id: 3, title: "Essay Writing", class: "Class 9-A", dueDate: "2026-02-08", submitted: 42, total: 48 },
  ];

  return (
    <div className="teacher-assignments">
      <div className="assignments-header">
        <h2>Assignments</h2>
        <button className="create-assignment-btn">+ Create New</button>
      </div>

      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="assignment-item">
            <div className="assignment-info">
              <h4>{assignment.title}</h4>
              <p>{assignment.class}</p>
              <p className="due-date">Due: {assignment.dueDate}</p>
            </div>

            <div className="submission-stats">
              <div className="submission-progress">
                <div className="progress-bar-submission">
                  <div
                    className="progress-fill-submission"
                    style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                  ></div>
                </div>
                <span className="submission-text">
                  {assignment.submitted}/{assignment.total} Submitted
                </span>
              </div>
            </div>

            <button className="view-assignment-btn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherAssignments;
