import React from "react"
import getImageUrl from "../../utl"
import projects from "../../data/projects.json"
import styles from "./ProjectCard.module.css"

export default function ProjectCard() {
    const element = projects.map((items, id) => {
        return (
            <div key={id} className={styles.container}>
                <img src={getImageUrl(items.imageSrc)} alt={`Image of ${items.title}`} className={styles.image} />
                <h3 className={styles.title}>{items.title}</h3>
                <p className={styles.description}>{items.description}</p>
                <ul className={styles.skills}>
                     {items.skills.map((skill, id) => {
                       return <li className={styles.skill} key={id}>{skill}</li>
                    })}
                </ul>
                <div className={styles.links}>
                    <a className={styles.link} href="#demo">Demo</a>
                    <a className={styles.link} href={items.source}>Source</a>
                </div>
            </div>
        )
    })
    return (
        <>
          {element}
        </>
    )
}