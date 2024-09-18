import styles from './NavBar.module.css'
import logo from '../assets/MainLogo.png'




function NavBar() {


  return (

    <div>

      <div className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />

        <ul className={styles.navMenu}>
          <li>   <a href="#home">Home</a></li>
          <li>  <a href="#about">About Me</a> </li>
        
          <li> <a href="#services">Services</a> </li>
          <li><a href="#contact">Contact</a></li>


        </ul>
        <div className={styles.navConnect}>Connect with me</div>
      </div>
    </div>

  );

}

export default NavBar;
