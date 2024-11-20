import React, { useState } from "react";
import Home from "./Home";
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

  const [showHome, setShowHome] = useState(false); // State to control redirection
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage loading state

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true); // Set loading state to true before sending the request

      // Commented out API code completely for now
      // const signupData = {
      //   name: formData.name,
      //   email: formData.email,
      //   number: formData.number,
      //   password: formData.password,
      //   interests: selectedInterests,
      // };
      // try {
      //   const response = await fetch("https://your-api-url.com/createuser", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(signupData),
      //   });
      //   const result = await response.json();
      //   if (response.ok) {
      //     setShowHome(true);
      //   } else {
      //     alert("Signup failed: " + result.message);
      //   }
      // } catch (error) {
      //   alert("An error occurred. Please try again.");
      // } finally {
      //   setIsSubmitting(false);
      // }

      // Directly trigger redirection to the Home page
      setShowHome(true); // Trigger redirection
    }
  };

  if (showHome) {
    return <Home />;
  }

  return (
    <div className="signup-container">
      {/* Left section */}
      <div className="signup-left">
        <h1>✨ Sign Up</h1>
        <p className="signup-subtitle">Signup for free</p>

        <button className="signup-btn google-btn">
          <img src="/google-icon.png" alt="Google" className="icon" />
          Sign up with Google
        </button>
        <button className="signup-btn apple-btn">
          <img src="/apple-icon.png" alt="Apple" className="icon" />
          Sign up with Apple
        </button>

        <div className="or-divider">
          --------------------OR--------------------
        </div>

        <div className="form-container">
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
            <label className="signup-checkbox">
              <input type="checkbox" />I agree to all the{" "}
              <a href="/terms">Privacy Policy and Terms & Conditions</a>
            </label>
            <br />
            <br />

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <img src="/signup.png" alt="image" className="signup-img" />
      </div>
    </div>
  );
};

export default Signup;
