import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">🚀 Data Fetching Dashboard</h1>
      <p className="dashboard-subtitle">Choose a data source to explore</p>
      <div className="dashboard-cards">
        <Link to="/local-users" className="dashboard-card" id="link-local-users">
          <span className="dashboard-icon">📋</span>
          <h2>Local Users</h2>
          <p>Fetch user data from a local JSON file</p>
        </Link>
        <Link to="/users" className="dashboard-card" id="link-users-api">
          <span className="dashboard-icon">🌐</span>
          <h2>Users API</h2>
          <p>Fetch users from JSONPlaceholder API</p>
        </Link>
        <Link to="/posts" className="dashboard-card" id="link-fake-posts">
          <span className="dashboard-icon">📝</span>
          <h2>Fake API Posts</h2>
          <p>Fetch posts from DummyJSON using Axios</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
