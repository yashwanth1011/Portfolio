import React from 'react'
import pic from '../../assets/profilePic.jpeg'
import styles from './Profile.module.css'

const profile = () => {
  return (
    <div className={styles.profile}>
        <img src = {pic} alt = "Profile Picture" className={styles.img}/>
        <h1><span>I'm Yashwanth Chennu,</span> frontend developer based in USA.</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple</p>
        <div className={styles.heroAction}>
            <div className={styles.heroConnect}>Connect with me</div>
            <div className={styles.resume}>My Resume</div>


        </div>
    </div>
  )
}

export default profile