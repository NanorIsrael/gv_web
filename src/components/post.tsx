
function Post({url, intro}:{url: string | null, intro: string | null}){
  return (
    <div className="p-4 bg-white m-2 rounded overflow-hidden shadow-md w-100 h-auto card">
      <span>{new Date(Date.now()).toDateString()}</span>
      <span>Topic</span>
      <p className="py-4">
        {intro ?
        <div dangerouslySetInnerHTML={{__html: `
        ${intro}
      `}} />
       
         : 
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Excepturi tenetur placeat nostrum deleniti nesciunt possimus \
        provident molestias odio facilis, quam sed eligendi dignissimos? \
        Laborum maxime quia eius id blanditiis omnis?"
      }
      </p>
      <p className="read_more ml-2 no_wrap">
          <strong>
            &mdash;&gt;&nbsp;<a href={`${url ? url : '/'}`} target={'_blank'} rel={'noreferrer noopener'} >read more</a>
          </strong>
        </p>
    </div>
  );
};

export default Post;
