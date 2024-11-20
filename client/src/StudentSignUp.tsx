import React from "react";

const Signup: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Logo */}
      <img
        src="https://th.bing.com/th?id=OIP.Qpury8cjs_hKHaiHMrTVyAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" // Replace with your logo URL
        alt="App Logo"
        style={styles.logo}
      />

      {/* Signup Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Student Signup</h2>
        <form>
          <label style={styles.label}>
            Name:
            <input type="text" name="name" required style={styles.input} />
          </label>
          <label style={styles.label}>
            Email:
            <input type="email" name="email" required style={styles.input} />
          </label>
          <label style={styles.label}>
            Phone Number:
            <input type="number" name="number" required style={styles.input} />
          </label>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Confirm Password:
            <input
              type="password"
              name="password"
              required
              style={styles.input}
            />
          </label>

          {/* Interests Section */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Interests</legend>
            <label>
              <input type="checkbox" name="interests" value="music" />
              Music
            </label>
            <br />
            <label>
              <input type="checkbox" name="interests" value="art" />
              Art
            </label>
            <br />
            <label>
              <input type="checkbox" name="interests" value="dance" />
              Dance
            </label>
            <br />
            <label>
              <input type="checkbox" name="interests" value="yoga" />
              Yoga
            </label>
            <br />
            <label>
              <input type="checkbox" name="interests" value="c++" />
              C++
            </label>
            <br />
            <label>
              <input type="checkbox" name="interests" value="java" />
              Java
            </label>
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
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
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
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  fieldset: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
  },
  legend: {
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Signup;
