import { useState } from 'react'
import BlogList from './BlogList';
import styles from './Home.module.css'

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'eusebio', id: 1 },
    { title: 'Welcome party!', body: 'lotrm ipsum...', author: 'simango', id: 2 },
    { title: 'Web dev top tips', body: 'lorem iupsum...', author: 'eusebio', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id )
    setBlogs(newBlogs)
  }

  return (
    <div className="Home">
      <BlogList blogs={blogs} styles={styles} title="All blogs!" handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter(blog => blog.author === 'eusebio')} styles={styles} title="Eusebio's blogs!" /> */}
    </div>
  )
}

export default Home;
