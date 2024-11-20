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
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      gap: '10px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f5faff',
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007BFF',
      color: '#fff',
      cursor: 'pointer',
    },
    buttonSecondary: {
      padding: '10px 20px',
      border: '1px solid #007BFF',
      borderRadius: '5px',
      backgroundColor: '#fff',
      color: '#007BFF',
      cursor: 'pointer',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '10px',
    },
  };

  const handleStudentSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent page reload
    setShowStudentSignUp(true); // Show StudentSignUp component
  };

  if (showStudentSignUp) {
    return <StudentSignUp />; // Render StudentSignUp component if state is true
  }

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: '150px', height: 'auto', borderRadius: '50%' }}
        />
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <button type="submit" style={styles.button}>
          Login
        </button>
        <h3>OR</h3>
        <p>Don't have an account? Sign up as:</p>
        <div style={styles.buttonGroup}>
          <button
            style={styles.buttonSecondary}
            onClick={handleStudentSignUpClick}
          >
            Student
          </button>
          <button style={styles.buttonSecondary}>Trainer</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
