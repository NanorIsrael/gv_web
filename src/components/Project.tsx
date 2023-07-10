import { Link } from 'react-router-dom';

type ProjectProps = {
    url: string
    name: string
    img: string
    description: string
}
export default function Project({description, url, name, img}: ProjectProps) {
  return (
    <div className="card p-4 bg-white rounded overflow-hidden shadow-md w-100 h-80 m-2 lg:w-64 m-1">
      <figure>
        <img src={`/images/projects/${img}.png`} alt="project-rw" />
        <figcaption>
          <p>
            <span className="">
              <strong>Name:</strong>
            </span>
            <Link target={'_blank'} to={url}>
             {name}
            </Link>
          </p>
          <p>
            <span>
              <strong>Description:</strong>
            </span>
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
