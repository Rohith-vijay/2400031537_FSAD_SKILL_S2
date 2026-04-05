import { useEffect, useState } from 'react';

export default function Users() {
  console.log('Users component rendered');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiBase = import.meta.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com';
    const url = `${apiBase}/users`;
    console.log('Fetching users from:', url);

    fetch(url)
      .then((res) => {
        console.log('Fetch response status:', res.status);
        if (!res.ok) throw new Error('Failed to fetch users from API');
        return res.json();
      })
      .then((data) => {
        console.log('Received data:', data);
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container"><div className="loading">Loading users...</div></div>;
  if (error) return <div className="container"><div className="error">Error: {error}</div></div>;

  return (
    <div className="container">
      <section className="users-section">
        <h2>Users</h2>
        {users.length === 0 ? (
          <div className="empty-state">No users found.</div>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
