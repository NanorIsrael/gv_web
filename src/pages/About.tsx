import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <header className={'flex justify-between z-0 py-[36px]'}>
      <nav className="container primary-bg rounded-[70px]">
      <Link to={'/'} className="p-2 text-2xl">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </nav>
    </header>
    <article aria-label="About" className="container h-full">
      <section className="flex flex-col items-center justify-center p-8">
        <hgroup className="pb-4">
          <h1 className="greeting gray-500 text-center text-2xl p-2">
            Hi! I&apos;m Israel.
          </h1>
          <h2 className="tagline text-xl font-bold">
            Coding is my craft. Teaching is my passion.
          </h2>
        </hgroup>
        <img
          src="/israel_image.png"
          alt="profile"
          width={'300'}
          height={'300'}
          className="profile_photo"
        />
      </section>
      <section className="p-8 leading-normal md:text-md">
      <p className="p-2" >
        A long time ago, I was searching for a subscription hack to enjoy a
        service freely. Desperate, I sought a manual hoping it could help me,
        but I stumbled upon something much better.
      </p >
      <p className="p-2">
        That&apos;s how I discovered programming. Since then, I&apos;ve dabbled
        in websites, game development, artificial intelligence, and more. It
        turns out coding is much like magic.
      </p>
      <p className="p-2">
        Nowadays, I work as a contractor software Engineer. I deal mostly with
        web fullstack development (fun stuff like Python, Javascript , React). So if you&apos;re a
        software developer or perhaps an enthusiast, hopefully you will find the
        content on my site enriching!
      </p>
      </section>
     
    </article>
    </>
    
  );
}

export default About;
