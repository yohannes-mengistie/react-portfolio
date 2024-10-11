import React from "react"
import ProjectCard from "./projectCard"
import styles from "./Project.module.css"




export default function Project(){
    
    return(
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <ProjectCard className={styles.projects} />
        </section>
    )
}