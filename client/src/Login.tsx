import React from 'react';

const Login: React.FC = () => {
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
      backgroundColor: '#f5faff', // Updated background color
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
      gap: '10px', // Space between the buttons
      marginTop: '10px',
    },
  };

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
          {/* Displaying buttons side by side */}
          <button style={styles.buttonSecondary}>Student</button>
          <button style={styles.buttonSecondary}>Trainer</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
