import styles from './NavBar.module.css'
import logo from '../assets/MainLogo.png'




function NavBar() {


  return (

    <div>

      <div className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />

        <ul className={styles.navMenu}>
          <li >   <a href="#home" className={styles.menu}>Home</a></li>
          <li >  <a href="#about" className={styles.menu}>About Me</a> </li>
        
          <li > <a href="#services" className={styles.menu}>Services</a> </li>
          <li ><a href="#contact" className={styles.menu}>Contact</a></li>


        </ul>
        <div className={styles.navConnect}>Connect with me</div>
      </div>
    </div>

  );

}

export default NavBar;
