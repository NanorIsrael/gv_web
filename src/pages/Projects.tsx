import Body from '../components/Body';
import Project from '../components/Project';

function Projects() {
  const project = [
    { 
    id: 1,
    url: "https://foodscrapspickup.com",
    name: "Ramsey/Washington", 
    description:"For residents of Washington & Ramsey County who would like to \
    subscribe to the new food scraps pickup program and want to learn \
    more about the program, the R&W food scraps pickup program website \
    will allow users to order their free annual supply of food scrap \
    bags yearly or order additional bags at a cost and to learn more \
    about the program.",
    img: "rw",
  },
  {
    id: 2,
    url: "https://nanorisrael.github.io/movie_store/",
    name:'cimoviez', 
    description:`${"A movie library will all information you need about a movie. A personal project and still in progress."}`,
    img: "cimoviez",
  },
  {
    id: 3,
    url: "https://animated-sopapillas-60dde9.netlify.app/book-now",
    name:'TruHair & Beaty', 
    description:`${"A booking application to enable a beautician client, serve her customers \
     with all their beauty needs and provide other online services. A personal project and still in progress."}`,
    img: "truhair",
  },
  {
    id: 4,
    url: "https://dreamy-hermann-e618fe.netlify.app",
    name:'Gv Foods', 
    description:`${"Get all your food needs from gv foods. We are ready to serve you. A personal project and still in progress."}`,
    img: "bistro",
  },
  {
    id: 5,
    url: "https://gifted-einstein-27d727.netlify.app",
    name:'Tenzies', 
    description:`${"An online tenzies game. We are ready to serve you. A personal project and still in progress."}`,
    img: "tenzies",
  }
]
  return (
    <Body aside>
      <article aria-label="Projects" className='bg-gray-100'>
       { project.map(p => <Project
        description={p.description}
        url={p.url} 
        name={p.name}
        img={p.img}
        key={p.id}/>)}
       </article>
    </Body>
  );
}
export default Projects;
