import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import "./PurchasedCourseDetails.css"; // Add CSS for styling

interface CourseDetails {
  name: string;
  instructor: string;
  description: string;
  timings: string;
  duration: string;
  youtube_url: string;
}

const PurchasedCourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>(); // Extract courseId from URL parameters
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // Correct URL to use the courseId dynamically in the URL
        const response = await fetch(`http://localhost:5001/api/getCourseDetails/${courseId}`);

        if (!response.ok) {
          const errorText = await response.text(); // Log detailed error message from server
          throw new Error(`Failed to fetch course details: ${errorText}`);
        }
        const data: CourseDetails = await response.json();
        setCourse(data);
      } catch (err) {
        console.error("Fetch error:", err); // Log error to console for better debugging
        setError("An error occurred while fetching course details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (isLoading) {
    return <div className="loading">Loading course details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!course) {
    return <div className="error">No course details available.</div>;
  }

  return (
    <div className="purchased-course-details">
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Class Timings:</strong> {course.timings}</p>
      <p><strong>Course Duration:</strong> {course.duration}</p>
      <p>
        <strong>YouTube Link:</strong>{" "}
        <a href={course.youtube_url} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </p>
    </div>
  );
};

export default PurchasedCourseDetails;
