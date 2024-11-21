import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  const courses = [
    {
      image: "/path/to/image1.png", // Example image path
      name: "Web Development",
      duration: "6 Months",
      fees: "$200",
      ratings: "4.5/5",
    },
    {
      image: "/path/to/image2.png", // Example image path
      name: "Data Science",
      duration: "8 Months",
      fees: "$350",
      ratings: "4.8/5",
    },
    {
      image: "/path/to/image3.png", // Example image path
      name: "Machine Learning",
      duration: "12 Months",
      fees: "$500",
      ratings: "4.7/5",
    },
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search Courses..."
            className="search-bar"
          />
        </div>
        <div className="notification-icon-container">
          <img
            src="/notification-icon.png"
            alt="Notifications"
            className="notification-icon"
          />
        </div>
      </header>

      {/* Courses List */}
      <section className="courses-list">
        <h2 className="courses-title">Available Courses</h2>
        <div className="courses-container">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.image}
                alt={course.name}
                className="course-image"
              />
              <div className="course-details">
                <h3 className="course-name">{course.name}</h3>
                <p className="course-duration">Duration: {course.duration}</p>
                <p className="course-fees">Fees: {course.fees}</p>
                <p className="course-ratings">Ratings: {course.ratings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Task Bar */}
      <footer className="task-bar">
        <div className="task-bar-item">
          <img src="/home-icon.png" alt="Home" className="task-bar-icon" />
        </div>
        <div className="task-bar-item">
          <img
            src="/profile-icon.png"
            alt="Profile"
            className="task-bar-icon"
          />
        </div>
        <div className="task-bar-item">
          <img
            src="/settings-icon.png"
            alt="Settings"
            className="task-bar-icon"
          />
        </div>
      </footer>
    </div>
  );
};

export default Home;
