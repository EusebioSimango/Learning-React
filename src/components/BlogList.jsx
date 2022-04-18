import { Link } from 'react-router-dom'

const BlogList = ({blogs, styles, title }) => {

  return (
    <div>
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className={styles.blogPreview} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList