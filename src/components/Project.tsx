import { Link } from 'react-router-dom';

type ProjectProps = {
    url: string
    name: string
    img: string
    description: string
}
export default function Project({description, url, name, img}: ProjectProps) {

  return (
    <div className="py-4 bg-white rounded overflow-hidden shadow-md w-100 m-2">
      <figure>
        <img src={`/images/projects/${img}.webp`} alt={`project-${name}`} className='w-full'/>
        <figcaption>
          <h4 className='font-bold text-md my-2'>
            <Link target={'_blank'} to={url} className='no-underline'>
             {name}
            </Link>
          </h4>
          <p>
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
