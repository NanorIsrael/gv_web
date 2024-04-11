import Body from '../components/Body';
import Post from '../components/Post';

function Blog() {
  const blogPost = [
    {
      url: 'https://medium.com/@israelnanor88/when-you-enter-the-url-https-www-google-com-146b9973c3b5',
      intro: 'When you enter the URL <a href="https://www.google.com" target="_blank">https://www.google.com</a> into your browser’s \
      address bar and press Enter, a series of behind-the-scenes processes is set in motion. \
      Let’s break down what happens step by step:'
    }
  ]
  return (
    <Body aside>
      <article aria-label="Home" className='bg-gray-100'>
        <section className="post_content flex flex-col items-center p-4">
          {
            blogPost.map(post => {
              return <Post  key={post.url} url={post.url} intro={post.intro}/>
            })
          }
          
          <Post url={null} intro={null}/>
          <Post url={null} intro={null}/>
       
        </section>
      </article>
    </Body>
  );
}
export default Blog;
