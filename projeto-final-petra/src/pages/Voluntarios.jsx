import React from 'react';
import Header from "../components/Header"
import styles from '../styles/pages/voluntarios.module.css'
import Slider from '../components/Slider'
import Form from '../components/Form'

const Voluntarios = () => {
  return (
    <>

      <main>
        <section className={styles.titleSection}>
          <h1 className={styles.voluntariosTitle}>Nossos Voluntários</h1>
        </section>

        <section className={styles.sliderSection}>
          <Slider />
        </section>

        <section className={styles.formSection}>
          <Form />
        </section>
      </main>
    </>
  );
}

export default Voluntarios;


