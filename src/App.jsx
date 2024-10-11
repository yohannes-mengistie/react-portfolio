
import styles from './App.module.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from './components/hero/Hero.jsx'
import About from './components/about/About.jsx'
import Project from './components/projects/Project.jsx'
function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  )
}

export default App
