import React from 'react'
import styles from './Contact.module.css'
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";


const Contact = () => {
  return (
    <div id = "contact" className={styles.contact}>
      <div className={styles.contactTitle}>
        <h1>Get in Touch</h1>
        {/* <img src="{theme_pattern}" alt="theme image" /> */}

      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus atque animi temporibus amet repellendus id hic sint! Suscipit, ad quo quae nam dolores illo dolor. Reiciendis aliquam distinctio dignissimos?</p>

          <div className={styles.contactDetails}>
            <div className={styles.contactDetail}>
              <SiGmail color="#FF00FF" size={30} /> <p>yashwanthchennu1999@gmail.com</p>

            </div>
            <div className={styles.contactDetail}>
              <IoCall color="#FF00FF" size={30} /> <p>+1 7168165789</p>


            </div>
            <div className={styles.contactDetail}>
              <FaMapLocation color="#FF00FF" size={30} /> <p>Buffalo, NY, United States</p>

            </div>
          </div>
        </div>

        <form className={styles.contactRight}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
          <button className={styles.contactSubmit}>Submit Now</button>


        </form>
      </div>


    </div>
  )
}

export default Contact