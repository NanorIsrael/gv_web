import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin , faFacebookSquare, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion'
import { useEffect, useRef, useState } from "react";
import { useDimensions } from "../utils/utils";
import { Link } from "react-router-dom";

function Hero() {
	const [mounted, setMounted] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null)
	const { height } = useDimensions(containerRef)
  
	useEffect(() => {
	  setTimeout(() => {
		setMounted(true)
	  }, 500)
	}, [])
  
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
  
	return (
		<div className="grid md:grid-cols-3 gap-5 h-[50%] justify-between overflow-hidden mb-8">
			<motion.div 
			  initial={false}
			  animate={ mounted ? "open": "closed" }
			  custom={height}
			  ref={containerRef}
			  className="col-span-2 h-full shadow-md"
			>
			  <motion.ul 
			  variants={navVariants}
			  // animate={ mounted ? "open": "closed" }
			  className=" p-2 md:p-4"
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
				  <p className="text-md leading-loose text-dark font">I am a professional software engineer with over four years of experience. Driven by my passion for technology and problem-solving, I enjoy creating digital solutions. I strive to be at the forefront of innovation, contributing to the transformation of the digital landscape. My experience in software development enables me to build seamless and innovative solutions that drive business growth.
				  </p>
				</motion.li >
			  </motion.ul>
			</motion.div>
			<div className="hidden md:block w-full ml-4 bg-white-500 h-full py-4">
				<motion.div
				initial={false}
				animate={ mounted ? "open": "closed" }
				custom={height}
				ref={containerRef}
				className="w-[90%] mx-auto  pr-2 md:pr-4"
				>
					<motion.h3
						variants={itemVariants}
						className="p-2 text-md font-semibold bg-[#2563eb] text-[#fff] items-center"
					>
						Articles
					</motion.h3>
					<motion.div
					className="w-full p-4 my-auto"
					initial={false}
					animate={ mounted ? "open": "closed" }
					custom={height}
					ref={containerRef}
				  >
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
				</motion.div>
			 
			</div>
		</div>
	)
}
export default Hero;
