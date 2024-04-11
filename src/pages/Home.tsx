import Body from '../components/Body';

function Home() {
  return (
    <>
      <article aria-label="Home">
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("path_to_your_image.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl text-center font-bold">Hi! I&apos;m Israel.</h1>
        <h2 className="text-2xl md:text-3xl text-center font-bold">An Innovative Full-Stack Software Engineer</h2>
        <p className="text-lg md:text-xl text-center mt-4">Creating Digital Solutions</p>
        <p className="text-lg md:text-xl text-center max-w-[50%]">With a passion for technology and a knack for problem-solving, I am revolutionizing the digital landscape. My expertise in full-stack development allows me to create seamless and innovative solutions that drive business growth.</p>
        <div className="flex mt-8">
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Learn More</button>
          <button className="bg-white hover:bg-green-700 text-black font-bold py-2 px-4 rounded">Collaborate</button>
        </div>
      </div>
    </div>
      </article>
    </>
  );
}
export default Home;
