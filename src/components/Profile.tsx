import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="card p-4 bg-white rounded overflow-hidden shadow-md w-100 h-80 m-2 lg:w-64 m-1">
      <span>{new Date(Date.now()).toDateString()}</span>
      <span>Topic</span>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores
        eos corrupti officia, iusto perspiciatis ullam. Suscipit a, illum
        consectetur est, aspernatur, iusto molestiae voluptas sit fugit
        reiciendis nihil possimus.
        <span className="read_more ml-2 no_wrap">
          <strong>
            &mdash;&gt;&nbsp;<a href="/" target={'_blank'} rel={'noreferrer noopener'}>read more</a>
          </strong>
        </span>
      </p>
    </div>
  );
}

export default Profile;
