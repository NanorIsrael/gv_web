import { Link } from "react-router-dom";
import Project from "../components/Project";

function Home() {
  const project = [
    { 
    id: 1,
    url: "https://foodscrapspickup.com",
    name: "Ramsey/Washington Food Scraps Pickup Program", 
    description:"An ecommerce application for Ramsey/Washington county.",
    img: "rwhome",
  },
  {
    id: 2,
    url: "https://nanorisrael.github.io/movie_store/",
    name:'chatroom', 
    description:`${"A social media app for communities and individuals."}`,
    img: "cimoviez",
  },

]

  return (
    <>
      <div className="container">
      <header className={'flex justify-between z-0'}>
        <a href="/" className="hidden text-2xl p-2 z-0 md:block">
          GvTech
        </a>
        <nav className={'flex p-2 text-xl'}>
          <ul className={'flex'}>
            <li className={'mr-4'}>
              <a href="/">About Me</a>
            </li>
            <li className={'mr-4'}>
              <a href="#projects">Projects</a>
            </li>
            <li className={'mr-4'}>
              <a href="/blog">Skills</a>
            </li>
            <li className={'mr-4'}>
              <a href="/about">Contact</a>
            </li>
           </ul> 
        </nav>
      </header>
      <article aria-label="Home">
      <div className="relative bg-cover bg-center h-screen z-1000" style={{ backgroundImage: 'url("Israel_Image.png")', paddingTop: '60px' }}>
      <div className="absolute inset-0 bg-black opacity-50 pt-16"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl text-center font-bold">Hi! I&apos;m Israel.</h1>
        <h2 className="text-2xl md:text-3xl text-center font-bold">An Innovative Software Engineer</h2>
        <p className="text-lg md:text-xl text-center mt-4">Creating Digital Solutions</p>
        <p className="text-lg md:text-xl text-center max-w-[70%]">With a passion for technology and a knack for problem-solving, I am revolutionizing the digital landscape. My expertise in full-stack development allows me to create seamless and innovative solutions that drive business growth.</p>
        <div className="flex mt-8">
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Learn More</button>
          <button className="bg-white hover:bg-green-700 text-black font-bold py-2 px-4 rounded">Collaborate</button>
        </div>
      </div>
    </div>
    <section className="pt-12" id="projects">
      <h3 className="text-sm md:text-md text-center font-bold">Projects</h3>
      <h2 className="text-2xl md:text-3xl text-center font-bold mt-2">Showcasing My Expertise</h2>
      <p className="text-sm md:text-md text-center mt-2">Explore a selection  of my full-stack projects.</p>
      { project.map(p => <Project
        description={p.description}
        url={p.url} 
        name={p.name}
        img={p.img}
        key={p.id}/>)
      }
      <div className="flex justify-center items-center w-full m-4 p-4">
        <Link to="/projects">
        <button type={'button'}className="bg-whit text-black font-bold py-2 px-4 rounded border-black border hover:bg-black hover:text-white">View More</button>
        </Link>
      </div>
    </section>
      </article>
      <footer>&copy; GraceValley Technologies</footer>
    </div>
    </>
  );
}
export default Home;
