import Header from "../components/Header"
import portfolio from '../assets/woman-reading-book.svg'
import styles from '../styles/pages/voluntarios.module.css'
import Slider from '../components/Slider'

const Portfolio = () => {
  return (
    <>

    <Slider />
      <Header 
        image={portfolio} 
      />

      <div className={styles.Container}>



      </div>

    </>
   
  )
}

export default Portfolio


