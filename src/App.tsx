import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faFacebookSquare, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer className='py-12'>
        <section className='pb-12'>
          <h4 className='text-xl md:text-md font-bold'>Israel Nanor</h4>
          <address>
            <div className='py-2'>
            <h5 className='font-semibold'>Email:</h5>
            <p>israelnanor88@gmail.com</p>
            </div>
            <div className='py-2'>
            <h5 className='font-semibold'>Mobile:</h5>
            <p>+233557084927 / +233271053774</p>
            </div>
            <div className='py-2'>
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
          
        </section>
       <hr/>
       <p className='pt-4'>
       &copy; GraceValley Technologies
       </p>
      </footer>
    </div>
  );
}

export default App;
