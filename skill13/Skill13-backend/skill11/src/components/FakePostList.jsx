import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState('all');

  const fetchPosts = () => {
    setLoading(true);
    setError(null);
    axios
      .get('https://dummyjson.com/posts')
      .then((res) => {
        setPosts(res.data.posts);
        setFilteredPosts(res.data.posts);
        setSelectedUserId('all');
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedUserId === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((p) => p.userId === Number(selectedUserId)));
    }
  }, [selectedUserId, posts]);

  const uniqueUserIds = [...new Set(posts.map((p) => p.userId))].sort((a, b) => a - b);

  if (loading) return <div className="loading-spinner"><div className="spinner"></div><p>Loading posts…</p></div>;
  if (error) return <div className="error-message">⚠️ Error: {error}</div>;

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      <h2 className="page-title">📝 Fake API Posts</h2>
      <p className="page-subtitle">Fetched from <code>dummyjson.com/posts</code> using Axios</p>

      <div className="controls">
        <button className="refresh-btn" onClick={fetchPosts}>🔄 Refresh</button>
        <select
          className="filter-dropdown"
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        >
          <option value="all">All Users</option>
          {uniqueUserIds.map((id) => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
      </div>

      <p className="result-count">Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}</p>

      <div className="card-grid">
        {filteredPosts.map((post) => (
          <div className="card post-card" key={post.id}>
            <span className="card-badge">User {post.userId}</span>
            <h3>{post.title}</h3>
            <p className="post-body">{post.body}</p>
            <div className="post-tags">
              {post.tags && post.tags.map((tag) => (
                <span className="tag" key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakePostList;
