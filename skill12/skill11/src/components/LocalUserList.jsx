import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LocalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/users.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch local users');
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

  if (loading) return <div className="loading-spinner"><div className="spinner"></div><p>Loading local users…</p></div>;
  if (error) return <div className="error-message">⚠️ Error: {error}</div>;

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      <h2 className="page-title">📋 Local Users</h2>
      <p className="page-subtitle">Fetched from <code>public/users.json</code></p>
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

export default LocalUserList;
