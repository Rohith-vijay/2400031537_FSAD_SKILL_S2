import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiBase = import.meta.env.REACT_APP_API_URL || import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

    fetch(`${apiBase}/users`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users from API');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-spinner"><div className="spinner"></div><p>Loading users from API…</p></div>;
  if (error) return <div className="error-message">⚠️ Error: {error}</div>;

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      <h2 className="page-title">🌐 JSONPlaceholder Users</h2>
      <p className="page-subtitle">Fetched from <code>jsonplaceholder.typicode.com/users</code></p>
      <div className="card-grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-avatar">{user.name.charAt(0)}</div>
            <h3>{user.name}</h3>
            <p><span className="label">📧 Email:</span> {user.email}</p>
            <p><span className="label">📞 Phone:</span> {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
