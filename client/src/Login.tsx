import React, { useState } from "react";
import StudentSignUp from "./StudentSignUp";
import "./LoginSignup.css";

const Login: React.FC = () => {
  const [showStudentSignUp, setShowStudentSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleStudentSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowStudentSignUp(true);
  };

  if (showStudentSignUp) {
    return <StudentSignUp />;
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const data = { username, password };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Login successful:", result);
      } else {
        const errorResult = await response.json();
        setErrorMessage(errorResult.error || "Login failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h3 className="heading">Welcome!</h3>
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="button" onClick={handleLogin}>
          Login
        </button>
        <p className="text">OR</p>
        <p className="text">Don't have an account? Sign up as:</p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            className="button-secondary"
            onClick={handleStudentSignUpClick}
          >
            Student
          </button>
          <button className="button-secondary-disabled" disabled>
            Trainer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
