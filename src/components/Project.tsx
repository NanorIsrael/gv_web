import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <div className="card p-4 bg-white rounded overflow-hidden shadow-md w-100 h-80 m-2 lg:w-64 m-1">
      <figure>
        <img src="/images/projects/rw.png" alt="project-rw" />
        <figcaption>
          <p>
            <span className="">
              <strong>Name:</strong>
            </span>
            <Link target={'_blank'} to="https://foodscrapspickup.com">
              Ramsey/Washington
            </Link>
          </p>
          <p>
            <span>
              <strong>Description:</strong>
            </span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            ipsa et aspernatur ab alias molestiae consequuntur, debitis enim
            modi adipisci rerum laudantium autem cumque nemo eligendi natus.
            Aliquid, voluptate ea!
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
