import React, { useState } from 'react';
import StudentSignUp from './StudentSignUp';

const Login: React.FC = () => {
  const [showStudentSignUp, setShowStudentSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

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
      gap: '10px',
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
      marginBottom: '5px',
    },
    text: {
      fontSize: '14px',
      color: '#555',
      textAlign: 'center' as 'center',
      marginBottom: '5px',
    },
    heading: {
      fontSize: '16px',
      fontWeight: 600,
      margin: '5px 0',
    },
    errorMessage: {
      color: 'red',
      fontSize: '12px',
      marginBottom: '10px',
      textAlign: 'center' as 'center',
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
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f5f5f5',
      color: '#999',
      fontSize: '14px',
      cursor: 'not-allowed',
    },
  };

  const handleStudentSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowStudentSignUp(true);
  };

  if (showStudentSignUp) {
    return <StudentSignUp />;
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages

    const data = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        // Handle successful login
      } else {
        const errorResult = await response.json();
        setErrorMessage(errorResult.error || 'Login failed'); // Display error message
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

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
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>} {/* Display error */}
        <button type="submit" style={styles.button} onClick={handleLogin}>
          Login
        </button>
        <p style={styles.text}>OR</p>
        <p style={styles.text}>Don't have an account? Sign up as:</p>
        <div style={styles.buttonGroup}>
          <button
            style={styles.buttonSecondary}
            onClick={handleStudentSignUpClick}
          >
            Student
          </button>
          <button style={styles.buttonSecondaryDisabled} disabled>
            Trainer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
