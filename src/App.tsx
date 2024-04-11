import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      {/* <header className={' z-0'}>
        <Link to="/" className="hidden text-2xl p-2 z-0 md:block">
          GvTech
        </Link>
        <nav className={'flex p-2 text-xl'}>
          <ul className={'flex'}>
            <li className={'mr-4'}>
              <NavLink to="/">About Me</NavLink>
            </li>
            <li className={'mr-4'}>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className={'mr-4'}>
              <NavLink to="/blog">Skills</NavLink>
            </li>
            <li className={'mr-4'}>
              <NavLink to="/about">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer>&copy; GraceValley Technologies</footer>
    </div>
  );
}

export default App;
