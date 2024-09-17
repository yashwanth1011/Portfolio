import React from 'react'
import styles from './AboutMe.module.css'
import pic from '../../assets/profilePic.jpeg'

const AboutMe = () => {
  return (
    <div id = "about" className={styles.about}>
      <div className={styles.aboutTitle}>
        <h1>About Me</h1>
       
      </div>
      <div className={styles.aboutSections}>
        <div className={styles.aboutLeft}>
        <img src = {pic} alt = "Profile pictures" className={styles.pic}/>

        </div>
        <div className={styles.aboutRight}>
          <div className={styles.aboutPara}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus laudantium dicta vero possimus reiciendis, ullam ipsa tenetur soluta maxime adipisci corrupti sit laboriosam! Dolorem minus ad non ullam atque.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, adipisci, corporis ab est debitis, error quam quidem dicta laboriosam assumenda soluta quaerat facilis eos dolorem odit itaque inventore! Dolores, repellendus!
            </p>

          </div>
          <div className={styles.aboutSkills}>
            <div className={styles.aboutSkill}><p>HTML & CSS</p><hr style = {{width: "50%"}}/></div>
            <div className={styles.aboutSkill}><p>Javascript</p><hr style = {{width: "60%"}}/></div>
            <div className={styles.aboutSkill}><p>React</p><hr style = {{width: "70%"}}/></div>
            <div className={styles.aboutSkill}><p>Node js</p><hr style = {{width: "50%"}}/></div>

          </div>

      

        </div>

      </div>
      <div className={styles.aboutAchievements}>
            <div className={styles.aboutAchievement}>
              <h1>10+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className={styles.aboutAchievement}>
              <h1>90+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className={styles.aboutAchievement}>
              <h1>15+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
            <hr/>

          </div>
    </div>
  )
}

export default AboutMe

