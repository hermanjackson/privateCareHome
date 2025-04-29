import React, { useEffect, useState } from 'react';

const AdminDashboard = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [errorUsers, setErrorUsers] = useState('');
  const [errorContacts, setErrorContacts] = useState('');

 

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const res = await fetch('https://your-backend-url.com/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch users');
      }
      setUsers(data);
    } catch (err) {
      setErrorUsers(err.message);
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchContacts = async () => {
    setLoadingContacts(true);
    try {
      const res = await fetch('${process.env.REACT_APP_API_URL}/admin/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch contacts');
      }
      setContacts(data);
    } catch (err) {
      setErrorContacts(err.message);
    } finally {
      setLoadingContacts(false);
    }
  };
  useEffect(() => {
    fetchContacts();
    fetchUsers();
  }, [fetchContacts, fetchUsers]);  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>

      <h3>Registered Users</h3>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : errorUsers ? (
        <p style={{ color: 'red' }}>{errorUsers}</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3 style={{ marginTop: 30 }}>Contact Messages</h3>
      {loadingContacts ? (
        <p>Loading contacts...</p>
      ) : errorContacts ? (
        <p style={{ color: 'red' }}>{errorContacts}</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.fullname}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;