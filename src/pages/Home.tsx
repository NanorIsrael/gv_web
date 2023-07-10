import Body from '../components/Body';
import Post from '../components/post';

function Home() {
  return (
    <Body aside>
      <article aria-label="Home">
        <section className="post_content flex flex-col items-center p-4">
          <Post />
        </section>
      </article>
    </Body>
  );
}
export default Home;
