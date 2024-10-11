import React from 'react'
import getImageUrl from '../../utl'
import styles from "./About.module.css"
export default function About(){
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>
                About Me
            </h1>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl("hero/about.avif")} alt="about-image" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursor.avif")} alt="cursor-img" className={styles.cursorImg} />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experiaence in building optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img  className={styles.mobileImg} src={getImageUrl("about/mobile.jpg")} alt="mobile-img" />
                        <div className={styles.aboutItemText}>
                            <h3>Mobile Developer</h3>
                            <p>
                                I'm a mobile developer with experiaence in building optimized app
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}