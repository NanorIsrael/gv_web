import Body from '../components/Body';
import Post from '../components/Post';

function Blog() {
  return (
    <Body aside>
      <article aria-label="Home" className='bg-gray-100'>
        <section className="post_content flex flex-col items-center p-4">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </article>
    </Body>
  );
}
export default Blog;
