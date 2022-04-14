import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <a className={styles.logo} href="/">The Dojo Blog</a>
      <nav>
        <a href="/">Home</a>
        <a href="/">New Blog</a>
      </nav>
    </div>
  )
}

export default Navbar