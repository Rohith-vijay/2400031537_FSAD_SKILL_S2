import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <div className="header-container">
          <h1>Skill13 Frontend</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<div className="container"><h2>404 Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
