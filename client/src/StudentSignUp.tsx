import React, { useState } from "react";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    interests: "", // Add interests field here
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    interests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      interests: e.target.checked ? e.target.value : "",
    });
  };

  const validate = () => {
    const newErrors: { [key in keyof typeof formData]: string } = {
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      interests: "",
    };

    // Name Validation: Should be at least 3 characters long
    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    // Email Validation: Should follow the proper email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone Number Validation: Should start with 9, 8, 7, or 6 and be 10 digits long
    const phoneRegex = /^[9876]\d{9}$/;
    if (!phoneRegex.test(formData.number)) {
      newErrors.number =
        "Phone number must start with 9, 8, 7, or 6 and be 10 digits.";
    }

    // Password Validation: Should contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.";
    }

    // Confirm Password Validation: Should match the password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Interests Validation: Should not be empty
    if (!formData.interests) {
      newErrors.interests = "Please select at least one interest.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).every(
      (key) => newErrors[key as keyof typeof newErrors] === ""
    ); // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!");
      // Handle form submission logic here
    }
  };

  return (
    <div style={styles.container}>
      {/* Logo */}
      <img src="/logo.png" alt="App Logo" style={styles.logo} />

      {/* Signup Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Student Signup</h2>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </label>

          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </label>

          <label style={styles.label}>
            Phone Number:
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              style={styles.input}
            />
            {errors.number && <p style={styles.error}>{errors.number}</p>}
          </label>

          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
            {errors.password && <p style={styles.error}>{errors.password}</p>}
          </label>

          <label style={styles.label}>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
            />
            {errors.confirmPassword && (
              <p style={styles.error}>{errors.confirmPassword}</p>
            )}
          </label>

          {/* Interests Section */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Interests</legend>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="music"
                checked={formData.interests === "music"}
                onChange={handleCheckboxChange}
              />
              Music
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="interests"
                value="art"
                checked={formData.interests === "art"}
                onChange={handleCheckboxChange}
              />
              Art
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="interests"
                value="dance"
                checked={formData.interests === "dance"}
                onChange={handleCheckboxChange}
              />
              Dance
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="interests"
                value="yoga"
                checked={formData.interests === "yoga"}
                onChange={handleCheckboxChange}
              />
              Yoga
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="interests"
                value="c++"
                checked={formData.interests === "c++"}
                onChange={handleCheckboxChange}
              />
              C++
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="interests"
                value="java"
                checked={formData.interests === "java"}
                onChange={handleCheckboxChange}
              />
              Java
            </label>
            {errors.interests && <p style={styles.error}>{errors.interests}</p>}
          </fieldset>

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// Internal CSS as a JavaScript object with React.CSSProperties
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    position: "relative",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "linear-gradient(135deg, #74ebd5, #acb6e5)",
    fontFamily: "Roboto,Arial,sans-serif",
    padding: "20px",
  },
  logo: {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "100px",
    height: "100px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "#f5faff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "15px",
    fontSize: "14px",
  },
  input: {
    width: "95%",
    padding: "8px",
    marginTop: "5px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  fieldset: {
    border: "none",
    padding: "0",
    marginBottom: "20px",
  },
  legend: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Signup;

