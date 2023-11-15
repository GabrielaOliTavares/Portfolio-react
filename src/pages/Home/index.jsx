import Footer from '../../componentes/Footer'
import Header from '../../componentes/Header'
import Container from '../../componentes/Container'
import styles from './Home.module.css'
import imagem from '../../assets/undraw_appreciation_hyu2.svg'
import { Link } from 'react-router-dom'


function Home() {
    return (
       <>
         
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Gabriela Tavares</span> <br />
              Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={imagem} alt="Imagem de Home (deu erro )" />
      </figure>
  </section>
        </> 
    )
}

export default Home