import React, { useState } from 'react';
import styles from '../styles/components/form.module.css';

const VoluntarioForm = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [profissao, setProfissao] = useState('');
  const [contato, setContato] = useState('');
  const [bairro, setBairro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para algum serviço ou armazená-los em algum estado global, conforme suas necessidades.
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Cadastre-se como voluntário</h2>
      <div className={styles.formGroup}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="idade">Idade:</label>
        <input
          type="number"
          id="idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="profissao">Profissão:</label>
        <input
          type="text"
          id="profissao"
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="contato">Contato:</label>
        <input
          type="text"
          id="contato"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bairro">Bairro onde mora:</label>
        <input
          type="text"
          id="bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default VoluntarioForm;