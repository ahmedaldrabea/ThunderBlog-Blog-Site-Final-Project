import './mainStyle.css';

function Blog(blog) {
  return (
    <div className="blogPreviewContainer">
      <img src="https://picsum.photos/200" />
      <div>
        <h2>{blog.Title}</h2>
        {/* <p>{blog.Content}</p> */}
      </div>
    </div>
  );
}

export default Blog;