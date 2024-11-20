import React, { useState } from "react";
import "./LoginSignup.css";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const interestsOptions = ["Music", "Art", "Dance", "Yoga", "C++", "Java"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const validate = () => {
    const newErrors: { [key in keyof typeof formData]: string } = {
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    };

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    const phoneRegex = /^[9876]\d{9}$/;
    if (!phoneRegex.test(formData.number)) {
      newErrors.number =
        "Phone number must start with 9, 8, 7, or 6 and be 10 digits.";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).every(
      (key) => newErrors[key as keyof typeof newErrors] === ""
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(
        "Form submitted successfully with interests:",
        selectedInterests
      );
      // Handle form submission logic here
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <img src="/logo.png" alt="App Logo" className="logo" />
        <h2 className="heading">Student Signup</h2>
        <form onSubmit={handleSubmit}>
          <label className="label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>

          <label className="label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          <label className="label">
            Phone Number:
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="input"
            />
            {errors.number && <p className="error">{errors.number}</p>}
          </label>

          <label className="label">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </label>

          <label className="label">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="input"
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </label>

          <fieldset className="interests-fieldset">
            <legend className="legend">Interests</legend>
            <div className="interests-container">
              {interestsOptions.map((interest) => (
                <div
                  key={interest}
                  className={`interest-box ${
                    selectedInterests.includes(interest) ? "selected" : ""
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </div>
              ))}
            </div>
          </fieldset>
          <br />

          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
