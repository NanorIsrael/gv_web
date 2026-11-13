import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header/header';
import Footer from './components/Footer';
import { ContactProvider } from './components/ContactProvider';

/** Scroll to `#hash` targets on navigation, otherwise reset to top on route change. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    // Jump (not smooth-scroll) to the top when changing pages.
    const html = document.documentElement;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = '';
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ContactProvider>
        <ScrollManager />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </ContactProvider>
    </MotionConfig>
  );
}

export default App;
