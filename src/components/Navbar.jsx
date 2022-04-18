import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <a className={styles.logo} href="/">The Dojo Blog</a>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </nav>
    </div>
  )
}

export default Navbar