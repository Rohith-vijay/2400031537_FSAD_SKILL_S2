import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LocalUserList from './components/LocalUserList';
import UserList from './components/UserList';
import FakePostList from './components/FakePostList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/local-users" element={<LocalUserList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/posts" element={<FakePostList />} />
          <Route path="*" element={<div className="page-container"><h2>404 - Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
