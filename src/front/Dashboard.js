import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the auth token
    history.push('/Login'); // Redirect to Login page
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Dashboard;
