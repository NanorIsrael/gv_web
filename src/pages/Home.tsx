import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {motion} from 'framer-motion'
import Project from "../components/Project";
import SwiftIcons from "../components/SwiftIcons";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin , faFacebookSquare, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
      if (ref.current) {
          dimensions.current.width = ref.current.offsetWidth
          dimensions.current.height = ref.current.offsetHeight
      }
  }, [ref])

  return dimensions.current
}

function Home() {
  const [toggleModal, setToggleModal] = useState(true);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(containerRef)


  useEffect(() => {

    setTimeout(() => {
      setMounted(true)

    }, 500)
  }, [])

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

  const project = [
    {
      id: 1,
      url: "https://foodscrapspickup.com",
      name: "Ramsey/Washington Food Scraps Pickup Program",
      description: "An ecommerce application for Ramsey/Washington county.",
      img: "rwhome",
    },
    {
      id: 2,
      url: "https://bsy.sh",
      name: 'bitsy',
      description: `${"The All-In-One platform to create and manage Short Links, Link-in-Bio pages, Digi Notes and QR Codes. Driving results, one click at a time."}`,
      img: "bsy-link",
    },

  ]

  const partnerIcons = [
    { id: 2, src: 'images/stacks/node.png', alt: 'nodejs' },
    { id: 10, src: 'images/stacks/ts.png', alt: 'typescript' },
    { id: 5, src: 'images/stacks/python.png', alt: 'python' },
    { id: 6, src: 'images/stacks/flask.jpeg', alt: 'flask' },
    { id: 1, src: 'images/stacks/django.jpeg', alt: 'django' },
    { id: 7, src: 'images/stacks/graphql.png', alt: 'graphql' },
    { id: 8, src: 'images/stacks/pg.png', alt: 'postgres' },
    { id: 9, src: 'images/stacks/mongo.jpeg', alt: 'mongodb' },
  ];

  const testimonials = [
    { remark: "Israel Nanor is truly exeptional and innovative.", img: "adam.jpeg", name: "Adam Eukuilkruit", role: "Principal software engineer" },
    { remark: "Israel's problem solving skills are unmatched.", img: "timothy.jpeg", name: "Timothy foster", role: "Senior software engineer" },
    { remark: "I highly recommend Israel for any software development project.", img: "chris.jpeg", name: "Chris Borgen", role: "Senior software engineer" }
  ]

  const handleContact = () => {
    setToggleModal(() => !toggleModal)
  }
  return (
    <>
        <article aria-label="Home" className="max-w-[1170px] mx-auto">
          <section className="py-40 ">
            {/* <div className="rounded-[70px] h-[500px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("")'}} id="about">
              <div className="relative h-full overflow-hidden">
                <div className="rounded-[70px] absolute inset-0 bg-black opacity-50"></div>
                <div className="rounded-[70px] absolute inset-0 flex flex-col justify-center items-center text-white">
                  <p className="text-lg md:text-xl text-center mt-4">Creating Digital Solutions</p>
                  <p className="text-lg md:text-xl text-center max-w-[70%]">With a passion for technology and a knack for problem-solving, I am revolutionizing the digital landscape. My expertise in full-stack development allows me to create seamless and innovative solutions that drive business growth.</p>
                  <div className="flex mt-8">
                    <Link to="/about">
                      <button className="primary-bg hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mr-4">Learn More</button>
                    </Link>
                    <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded">Collaborate</button>
                  </div>
                </div>
                </div>

            </div> */}


          <div className="grid md:grid-cols-3 gap-5 h-[50%] justify-between">
              <motion.div 
                initial={false}
                animate={ mounted ? "open": "closed" }
                custom={height}
                ref={containerRef}
                className="col-span-2  h-full"
              >
                <motion.ul 
                variants={navVariants}
                // animate={ mounted ? "open": "closed" }
                className=" p-2"
                >
                  <motion.li 
                  variants={itemVariants}
                  className="w-full h-[300px] flex justify-start">
                    <img 
                    src="/Israel_Image.png" 
                    alt="israel's photograph"
                    className="w-full h-full object-cover rounded-md"
                    />
                    <motion.div
                      className="w-full p-4 my-auto"
                      initial={false}
                      animate={ mounted ? "open": "closed" }
                      custom={height}
                      ref={containerRef}
                    >
                      {/*
                      <p className="text-md">I am a professional software engineer with 4+ years of experience.
                        Due to my passion for technology and problem solving, I enjoy creating digital solutions.
                        I aim at being at the fore-front to cause a revolution in the digital landscape. My experience in
                        software development allows me to create seamless and innovative solutions that drive business growth.
                      </p> 
                      */}
                      <motion.ul 
                        className='flex flex-col'
                        variants={navVariants}
                        
                      >
                        <motion.li
                          variants={itemVariants}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <Link to="https://www.linkedin.com/in/israelnanor1z" target='_blank' className='mr-4'>
                              <FontAwesomeIcon icon={faLinkedin} size={'2x'} style={{ color: "#2563eb" }}/>
                            </Link>
                        </motion.li>
                        <motion.li
                          variants={itemVariants}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <Link to="https://github.com/NanorIsrael" target='_blank' className='mr-4'>
                              <FontAwesomeIcon icon={faGithubSquare} size={'2x'} style={{ color: "#F97316" }}/>
                            </Link>
                         </motion.li>
                        <motion.li
                          variants={itemVariants}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <Link to="https://web.facebook.com/israel.nanor.1/" target='_blank' className='mr-4'>
                              <FontAwesomeIcon icon={faFacebookSquare} size={'2x'} style={{ color: "#2563eb" }}/>
                            </Link>
                           </motion.li>
                          <motion.li
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.95 }}
                          variants={itemVariants}
                        >
                            <Link to="https://web.facebook.com/israel.nanor.1/" target='_blank' className='mr-4'>
                              <FontAwesomeIcon icon={faTwitterSquare} size={'2x'} style={{ color: "#F97316" }}/>
                            </Link>
                         </motion.li>
                      </motion.ul>
                    </motion.div>
                  </motion.li>
                  <motion.li 
                  variants={itemVariants}
                  className="w-full pt-4 my-auto">
                    <h2 className="text-xl md:text-2xl">Hi! I&apos;m Israel,</h2>
                  </motion.li>
                  <motion.li 
                  variants={itemVariants}
                  className="py-2">
                    <p className="text-md leading-loose">I am a professional software engineer with over four years of experience. Driven by my passion for technology and problem-solving, I enjoy creating digital solutions. I strive to be at the forefront of innovation, contributing to the transformation of the digital landscape. My experience in software development enables me to build seamless and innovative solutions that drive business growth.
                    </p>
                  </motion.li >
                </motion.ul>
              </motion.div>
              <div className=" w-full ml-4 bg-white-500 h-full">
              under contruction
              </div>
          </div>
          </section>

          <section className="pt-12" id="projects">
            <h3 className="text-sm md:text-md text-center font-bold">Projects</h3>
            <h2 className="text-2xl md:text-3xl text-center font-bold mt-2">Showcasing My Expertise</h2>
            <p className="text-sm md:text-md text-center mt-2">Explore a selection  of my full-stack projects.</p>
            {project.map(p => <Project
              description={p.description}
              url={p.url}
              name={p.name}
              img={p.img}
              key={p.id} />)
            }
            <div className="flex justify-center items-center w-full m-4 p-4">
              <Link to="/projects">
                <button type={'button'} className="bg-whit text-black font-bold py-2 px-4 rounded border-black border hover:bg-black hover:text-white">View More</button>
              </Link>
            </div>
          </section>
          <section className="my-12 text-center md:text-start bg-[#202229] text-white">
            <div className="mygrad"></div>
            <div className="py-16 px-8">
              <h2 className="text-2xl md:text-3xl font-bold mt-2">What They Say</h2>
              <p className="text-sm md:text-md py-2">Read testimonials from my satified clients and professionals.</p>
              <div className="md:flex justify-around">
                {
                  testimonials.map(person => (
                    <div key={person.name} className="py-8 md:max-w-[300px]">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      <p className="text-sm md:text-md py-2 font-medium">{person.remark}</p>
                      <figure className="my-2 p-1 flex flex-col items-center text-center md:text-start md:items-start">
                        <img src={`images/testimonials/${person.img}`} alt="" width={100} height={100} className="block rounded-full border boder-black" />
                        <figcaption className="py-2 leading-tight">
                          <p className="text-sm font-medium md:text-md">{person.name}</p>
                          <p className="text-sm md:text-md">{person.role}</p>
                          <figure className="flex py-2 justify-center md:justify-start">
                            <img src={"images/testimonials/compoze.jpeg"} alt="compoze logo" width={20} height={2} className="rounded max-h-4 self-center" />
                            <p className="font-bold mx-1">Compoze labs</p>
                          </figure>
                        </figcaption>
                      </figure>

                    </div>
                  ))
                }
              </div>
            </div>
            <div className="clip-b"></div>
          </section>
          <hr />
          <section className="hidden md:block py-4" id="skills">
            <SwiftIcons speed={0.5} hoverSpeed={1} shadow={false}>
              {partnerIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={`${icon.alt} Icon`} className="w-[80px] h-[80px] rounded-full border-2 border-white bg-white shadow-md" />
              ))}
            </SwiftIcons>
          </section>
          <hr />
          <section className="bg-[#fff7e1]" id="skills bg-">
            <div className="mygrad"></div>
            <div className="py-16 px-12 md:flex">
              <hgroup className="w-full">
                <h2 className="text-[0.5rem] md:text-sm text-start font-semibold mt-2">Innovative</h2>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-start font-bold mt-2 pr-8">Professional Achievements and Expertise.</h3>
              </hgroup>
              <div className="w-full">
                <p className="text-sm md:text-md text-start mt-2 xlg:text-lg">With years of experience, I have completed numerous projects and mastered various technologies</p>
                <ul className="py-4 font-semibold text-xs leading-loose  md:text-sm md:leading-6 xlg:text-lg">
                  <li><span>✓</span>&nbsp;Frontend programming</li>
                  <li><span>✓</span>&nbsp;Backend programming</li>
                  <li><span>✓</span>&nbsp;Devops engineering</li>
                  <li><span>✓</span>&nbsp;Web3 programming</li>
                  <li><span>✓</span>&nbsp;Machine Learning with Python</li>
                </ul>
                <button className="bg-white hover:bg-white hover:text-black text-black font-bold py-2 px-4 rounded my-2 border border-black">Learn More</button>
              </div>
            </div>
            <div className="clip-b"></div>
          </section>
          <hr />
          <section className="bg-[#edefff]">
            <div className="mygrad"></div>
            <div className="py-12 px-8 flex flex-col-reverse md:flex-row-reverse">
              <div className="flex flex-col w-full">
                <hgroup className="w-full">
                  <h2 className="text-[0.5rem] md:text-sm text-start font-semibold mt-2">Imaginative</h2>
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-start font-bold mt-2">Transforming Software Engineering with Unique Approaches.</h3>
                </hgroup>
                <div className="w-full">
                  <p className="text-sm md:text-md text-start mt-2 xlg:text-lg transition ease-out delay-1000 duration-1000">Israel is a forward-thinking fullstack software engineer who brings a fresh perspective to every project. With a passion for innovation and a knack for problem-solving, He consistently delivers high-quality solutions that exceed expectations.</p>
                  <ul className="text-xs py-4 leading-loose font-normal md:text-sm md:leading-6 xlg:text-lg">
                    <li><span>&#9672;</span>&nbsp;Revolutionalizing User Experience through Intuitiv Design</li>
                    <li><span>&#9672;</span>&nbsp;Optimizing Performances Seamless Functionality</li>
                    <li><span>&#9672;</span>&nbsp;Implementing Cutting-Edge Technologies for Future-Proof Solutions</li>
                  </ul>
                  <button className="bg-white hover:bg-white hover:text-black text-black font-bold py-2 px-4 rounded my-2 border border-black">Learn More</button>
                </div>
              </div>

              <div className="w-full justify-center">
                <img
                  src="images/ui/software.jpg"
                  alt="software illustration"
                  className="pr-8 pt-2 h-full cursor-pointer lg:h-96"
                  width={600}
                />
              </div>
            </div>
            <div className="clip-b"></div>
          </section>
          <section className="bg-[#f2f3f4] text-center" id="contact">
            <div className="mygrad"></div>
            <div className="py-12 px-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">Seasoned Fullstack Software Engineer</h3>
              <p className="text-sm md:text-lg">Reach out for collaborations or hiring opportunities.</p>
              <div className="flex my-8 justify-center">
                <button className="hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mr-4 my-2 primary-bg" onClick={handleContact}>Contact</button>
                <button className="bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded my-2 border border-black">Learn More</button>
              </div>
              <Contact setToggleModal={setToggleModal} toggleModal={toggleModal} />
            </div>

            <div className="clip-b"></div>
          </section>
        </article>
    </>
  );
}
export default Home;
