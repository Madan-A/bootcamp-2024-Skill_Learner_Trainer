import React, { useEffect, useState } from "react";
import "./Home.css";

interface Course {
  image: string;
  name: string;
  instructor: string;
  fees: string;
  ratings: number;
}

const Home: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch courses from API
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/getCourses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses. Please try again later.");
        }
        
        const data = await response.json();
        // Validate courses and set state
        const validCourses = data.filter(
          (course: Course) =>
            typeof course.ratings === "number" &&
            typeof course.name === "string" &&
            typeof course.image === "string"
        );
        setCourses(validCourses);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const renderStars = (rating: number = 0) => {
    // Ensure the rating is valid and within 0-5 range
    const validRating = Math.min(Math.max(rating, 0), 5);
    const fullStars = Math.floor(validRating);
    const halfStar = validRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={`full-${index}`} className="star full-star">
              ★
            </span>
          ))}
        {halfStar && <span className="star half-star">★</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={`empty-${index}`} className="star empty-star">
              ☆
            </span>
          ))}
      </>
    );
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="search-bar-container">
          <img src="/search-icon.png" alt="Search" className="search-icon" />
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
        <div className="categories">
          <div className="category-type">Music</div>
          <div className="category-type">Dance</div>
          <div className="category-type">Drawing</div>
          <div className="category-type">Photography</div>
          <div className="category-type">Writing</div>
          <div className="category-type">Cooking</div>
          <div className="category-type">Coding</div>
          <div className="category-type">Acting</div>
          <div className="category-type">Literature</div>
          <div className="category-type">Public Speaking</div>
        </div>

        <h2 className="courses-title">Available Courses</h2>
        {isLoading ? (
          <p>Loading courses...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="courses-container">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-logo">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="course-image"
                  />
                </div>
                <div className="course-details">
                  <h3 className="course-name">{course.name}</h3>
                  <p className="course-instructor">
                    Instructor: {course.instructor}
                  </p>
                  <p className="course-fees">Fees: {course.fees}</p>
                  <p className="course-ratings">
                    Ratings: {renderStars(course.ratings ?? 0)}
                  </p>
                  <button className="buy-button">Buy</button>
                </div>
              </div>
            ))}
          </div>
        )}
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
