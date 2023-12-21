
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import imageHome from './img/developer-red.svg'

function Home() {
    return (
       <>
          
          <Container>
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Gabriela Tavares</span> <br />
              Programadora
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={imageHome} alt="Imagem de Home" />
         
      </figure>
  </section>
</Container>
          
        </> 
    )
}

export default Home
