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
            For residents of Washington & Ramsey County who would like to
            subscribe to the new food scraps pickup program and want to learn
            more about the program, the R&W food scraps pickup program website
            will allow users to order their free annual supply of food scrap
            bags yearly or order additional bags at a cost and to learn more
            about the program.
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
