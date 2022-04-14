import { useState } from 'react'
import styles from './Home.module.css'

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'eusebio', id: 1 },
    { title: 'Welcome party!', body: 'lotrm ipsum...', author: 'simango', id: 2 },
    { title: 'Web dev top tips', body: 'lorem iupsum...', author: 'eusebio', id: 3 }
  ]);
  
  return (
    <div className="Home"> 
    {  }
      { blogs.map( blog => (
        <div className={styles.blogPreview} key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  )
}

export default Home;
