import styles from './NavBar.module.css'
import logo from '../assets/logo.jpeg'




function NavBar() {
  return (
    <div>
      <div className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />

        <ul className={styles.navMenu}>
          <li> Home</li>
          <li>About Me </li>
        
          <li>Portfolio</li>
          <li>Contact</li>


        </ul>
        <div className={styles.navConnect}>Connect with me</div>
      </div>
    </div>

  );

}

export default NavBar;
