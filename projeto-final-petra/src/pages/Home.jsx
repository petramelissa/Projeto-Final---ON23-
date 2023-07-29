import Header from "../components/Header"

import home from '../assets/homelogo1.png'

import styles from '../styles/pages/home.module.css'



const Home = () => {
  return (
    <>
      <Header image={home} />

      <main className={styles.mainContent}>
        <h1 className={`${styles.cardTitle} ${styles.typingAnimation}`}>
          ConectAção Social: Desvendando Direitos, Fortalecendo Cidadania.
        </h1>

        <div className={`${styles.homeContainer} ${styles.backgroundImage}`}>
          <div className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>O que?</h2>

          
          <p className={styles.cardDescription}>
            O ConectAção Social é uma iniciativa engajada em promover a
            ampliação do acesso ao conhecimento sobre projetos e políticas
            públicas/sociais. Oferecemos informações gerais com base em
            critérios de renda, composição familiar, gênero e faixa etária, e
            direcionamos o usuário para políticas que se encaixam nesses perfis.
            Além disso, temos um cadastro de profissionais voluntários
            comprometidos em orientar e tratar dos assuntos pertinentes às
            políticas sociais.
          </p>

          <a href="/sobre" className={styles.joinButton}>
        Conheça a rede de Serviços de Camaragibe!
      </a>
        </div>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}> Por que?</h2>
          <p className={styles.cardDescription}>
            Como resposta a essa realidade, o ConectAção Social se fundamenta
            nos dados do Instituto Brasileiro de Geografia e Estátistica (IBGE)
            e do Indíce de Desenvolvimento Sustentável das Cidades (IDSC-BR)
            referentes ao município de Camaragibe-PE, que apontam desafios
            significativos na redução das desigualdades sociais na cidade nos
            últimos anos, como no percentual de pessoas abaixo da linha da
            pobreza inseridas no Cadastro Único e serviços do CRAS/CREAS,
            percebemos a necessidade urgente de proporcionar informações claras
            e acessíveis sobre a rede socioassistencial disponível no município.
          </p>
          
          <a href="/voluntarios" className={styles.joinButton}>
        Quem somos nós?
      </a>

        </div>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Como ajudar?</h2>
          <p className={styles.cardDescription}>
            {" "}
            Seja parte dessa transformação social. O ConectAção Social é o ponto
            de encontro para quem busca conhecimento, compreensão e acolhimento.
            Unidos, faremos a diferença e construiremos um futuro inclusivo para
            todos. Junte-se a nós!
      

          </p>
           
          <a href="/contato" className={styles.joinButton}>
        Tire suas dúvidas, queremos te ajudar!
      </a>
</div>
      </div>
      </main>
    </>
  );
}

export default Home;