import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function About() {
  return (
    <article aria-label="About" className="container">
      <header className={'flex justify-between z-0'}>
        <Link to={'/'} className="p-2 text-2xl">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </header>
      <section className="flex flex-col items-center p-4">
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
      <p className="pb-4">
        A long time ago, I was searching for a subscription hack to enjoy a
        service freely. Desperate, I sought a manual hoping it could help me,
        but I stumbled upon something much better.
      </p>
      <p className="pb-4">
        That&apos;s how I discovered programming. Since then, I&apos;ve dabbled
        in websites, game development, artificial intelligence, and more. It
        turns out coding is much like magic.
      </p>
      <p className="pb-4">
        Nowadays, I work as a contractor software developer. I deal mostly with
        Javascript code (fun stuff like Veu, React). So if you&apos;re a
        software developer or perhaps an enthusiast, hopefully you will find the
        content on my site enriching!
      </p>
    </article>
  );
}

export default About;
