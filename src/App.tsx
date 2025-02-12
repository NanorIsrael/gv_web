import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faFacebookSquare, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import { useEffect } from 'react';


function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const whiteListedPath = ['/projects', '/about']

  useEffect(() => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', 'dark')
    }, [])

  return (
    <div className="">
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer className=''>
        <section className='py-8 md:flex container primary-bg'>
          <article>
          <h4 className='text-xl md:text-md font-bold'>Israel Nanor</h4>
          <address className='leading-loose'>
            <div>
            <FontAwesomeIcon icon={faEnvelope} /><a className='mx-2 hover:text-[#f3f3f3] hover:font-[600]' href="mailto:israelnanor88@gmail.com">
              Email Me
            </a>
            </div>
            <div>
            <FontAwesomeIcon icon={faMobile} /><a href='tel:+233557084927' className='mx-2 hover:text-[#f3f3f3] hover:font-[600]'>Call Me</a>
            </div>
            <div className='flex'>
              <Link to="https://www.linkedin.com/in/israelnanor1z" target='_blank' className='mr-4'>
                <FontAwesomeIcon icon={faLinkedin} size={'2x'}/>
              </Link>
              <Link to="https://github.com/NanorIsrael" target='_blank' className='mr-4'>
                <FontAwesomeIcon icon={faGithubSquare} size={'2x'}/>
              </Link>
              <Link to="https://web.facebook.com/israel.nanor.1/" target='_blank' className='mr-4'>
                <FontAwesomeIcon icon={faFacebookSquare} size={'2x'}/>
              </Link>
              <Link to="https://web.facebook.com/israel.nanor.1/" target='_blank' className='mr-4'>
                <FontAwesomeIcon icon={faTwitterSquare} size={'2x'}/>
              </Link>
            </div>
          </address>
          </article>
        
          <section className='pt-8 md:flex w-[50%] md:pt-0'>
            <ul className='w-full leading-loose'>
              <Link to="/about"><li>About</li></Link>
              <Link to="/projects"><li>Projets</li></Link>
              <Link to="/blog"><li>Blog</li></Link>
              <Link to="/projects"><li>Services</li></Link>
            </ul>
            {
              !whiteListedPath.includes(pathname) && (
                <ul className='w-full leading-loose'>
                <li><a href="#about">Profile</a></li>
                <a href="#projects"><li>Works</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#contact"><li>Contact</li></a>
              </ul>
              )
            }
           
          </section>
        </section>
       <p className='container primary-bg h-full'>
       <hr/>
       &copy; GraceValley Technologies
       </p>
      </footer>
    </div>
  );
}

export default App;
