import React from "react"
import getImageUrl from "../../utl"
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Yohannes</h1>
                <p className={styles.description}>I'm Softwear Developer , expert with react and flutter</p>

                <a className={styles.contact} href="mailto:yohannesmengistie634@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/hero.avif")} alt="hero image" />
            <div className={styles.topblur} />
            <div className ={styles.bottomblur} />
            
        </section>

    )
}