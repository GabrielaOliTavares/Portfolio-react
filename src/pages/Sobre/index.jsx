import styles from './Sobre.module.css';


function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                {/* <img src={avatar} alt="Avatar" className={styles.avatar} /> */}
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Gabriela Tavares</span> <br />
                    <strong>Dev e estudante</strong> </p>

                    <p>Ainda estou estudando para ser uma Dev, mas pretendo colocar meus aprendizados em prática em um estágio.</p>

                    <p>Sou apaixonada por transformar ideias em realidade digital.</p>

                    <p>Fico muito orgulhosa em testemunhar a evolução pessoal e profissional de cada colega</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                  {/*   <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" /> */}
                </div>
            </div>

        </section>
    )
}

export default Sobre