import React from "react";

function Learn() {
  const courses = [
    {
      id: 1,
      title: "COURSE #2",
      progress: "3/6",
      stations: [
        { name: "Station 1", completed: true },
        { name: "Station 2", completed: true },
        { name: "Station 3", completed: true },
        { name: "Station 4", completed: false },
        { name: "Station 5", completed: false },
        { name: "Station 6", completed: false },
      ],
    },
    {
      id: 2,
      title: "COURSE #3",
      progress: "1/5",
      stations: [
        { name: "Station 1", completed: true },
        { name: "Station 2", completed: false },
        { name: "Station 3", completed: false },
        { name: "Station 4", completed: false },
        { name: "Station 5", completed: false },
      ],
    },
    {
      id: 3,
      title: "COURSE #4",
      progress: "0/4",
      stations: [
        { name: "Station 1", completed: false },
        { name: "Station 2", completed: false },
        { name: "Station 3", completed: false },
        { name: "Station 4", completed: false },
      ],
    },
  ];

  return (
    <div className="learn-page">
      <div className="buzz-map-header">
        <h2>🚂 Buzz Map</h2>
        <p>Your Learning Journey</p>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-track">
            <div className="course-header">
              <h3>{course.title}</h3>
              <span className="course-progress">{course.progress}</span>
            </div>

            <div className="train-track">
              {/* Train/Bee Image */}
              <div className="train-icon">🚂</div>

              {/* Railway Track with Stations */}
              <div className="railway-line"></div>

              {/* Stations */}
              <div className="stations-container">
                {course.stations.map((station, index) => (
                  <div
                    key={index}
                    className={`station ${station.completed ? "completed" : "pending"}`}
                  >
                    <div className="station-circle">
                      {station.completed ? "✓" : ""}
                    </div>
                    <div className="station-label">{station.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="track-progress">
              <div className="progress-bar-track">
                <div
                  className="progress-fill-track"
                  style={{
                    width: `${(parseInt(course.progress.split("/")[0]) / parseInt(course.progress.split("/")[1])) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;
