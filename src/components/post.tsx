import { Link } from 'react-router-dom';

function Post(){
  return (
    <div className="p-4 bg-white m-2 rounded overflow-hidden shadow-md w-100 h-auto card">
      <span>{new Date(Date.now()).toDateString()}</span>
      <span>Topic</span>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi tenetur placeat nostrum deleniti nesciunt possimus 
        provident molestias odio facilis, quam sed eligendi dignissimos? 
        Laborum maxime quia eius id blanditiis omnis?
      </p>
      <p className="read_more ml-2 no_wrap">
          <strong>
            &mdash;&gt;&nbsp;<Link to="/">read more</Link>
          </strong>
        </p>
    </div>
  );
};

export default Post;
