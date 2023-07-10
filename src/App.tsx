import './App.css';
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="container">
      <header className={'flex justify-between'}>
        <Link to="/" className="text-2xl p-2">
          GvTech
        </Link>
        <nav className={'flex p-2 text-xl'}>
          <ul className={'flex'}>
            <li className={'mr-4'}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={'mr-4'}>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className={'mr-4'}>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className={'mr-4'}>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer>&copy; GraceValley Technologies</footer>
    </div>
  );
}

export default App;
