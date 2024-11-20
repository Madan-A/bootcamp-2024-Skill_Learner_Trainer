import React, { useState } from 'react';
import StudentSignUp from './StudentSignUp';

const Login: React.FC = () => {
  const [showStudentSignUp, setShowStudentSignUp] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: `'Roboto', Arial, sans-serif`,
      background: 'linear-gradient(135deg, #74ebd5, #acb6e5)',
      padding: '20px',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      gap: '10px', // Reduced gap for a tighter layout
      width: '100%',
      maxWidth: '400px',
      padding: '30px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#ffffff',
    },
    logo: {
      width: '100px',
      height: 'auto',
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
      transition: '0.3s',
    },
    button: {
      padding: '10px',
      width: '100%',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007BFF',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginBottom: '5px', // Reduced space below Login button
    },
    text: {
      fontSize: '14px',
      color: '#555',
      textAlign: 'center' as 'center',
      marginBottom: '5px', // Reduced space below OR text
    },
    heading: {
      fontSize: '16px',
      fontWeight: 600,
      margin: '5px 0',
    },
    buttonSecondary: {
      padding: '10px',
      width: '48%',
      border: '1px solid #007BFF',
      borderRadius: '5px',
      backgroundColor: '#fff',
      color: '#007BFF',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
      width: '100%',
      justifyContent: 'space-between',
    },
    buttonSecondaryDisabled: {
      padding: '10px',
      width: '48%',
      border: '1px solid #ccc', // Light gray border for disabled state
      borderRadius: '5px',
      backgroundColor: '#f5f5f5', // Light gray background for disabled state
      color: '#999', // Light gray text color for disabled state
      fontSize: '14px',
      cursor: 'not-allowed', // Indicates the button is not clickable
    },
  };

  const handleStudentSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowStudentSignUp(true);
  };

  if (showStudentSignUp) {
    return <StudentSignUp />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
        <h3 style={styles.heading}>Welcome!</h3>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          style={styles.input}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        <p style={styles.text}>OR</p> {/* Changed from h3 to p for better styling */}
        <p style={styles.text}>Don't have an account? Sign up as:</p>
        <div style={styles.buttonGroup}>
          <button
            style={styles.buttonSecondary}
            onClick={handleStudentSignUpClick}
          >
            Student
          </button>
          <button style={styles.buttonSecondary} disabled>Trainer</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
