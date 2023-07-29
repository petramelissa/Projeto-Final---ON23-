import React from 'react';
import Bf from '../assets/bf.svg';
import Creas from '../assets/creas.svg';
import Cras from '../assets/1.svg'
import foto from '../assets/pagina3.png';
import Header from "../components/Header";
import styles from '../styles/pages/sobre.module.css';
import Form from '../components/Form.jsx'


const Sobre = () => {
  return (
    <>
      <Header image={foto} />

      <div className="containerform">
        <div className={styles.card}>
          <img src={Bf} alt="Bolsa Família" />
          <h3>Casa da Cidadania</h3>
          <p>
            O município dispõe de 1(um) espaço chamado Casa da Cidadania. A casa
            da cidadania sedia os serviços sociais do Cadastro Único e Bolsa
            Família. Além dos serviços do CadÚnico, Tarifa Social Celpe e
            Serviço Social, no local também funcionará o Vem Livre Acesso,
            Cartão SUS, coordenação do BEM e a parte da Educação do Bolsa
            Família, com orientação para a população.
          </p>
          <a href="#">Mais informações</a>
        </div>

        <div className={styles.card}>
          <img src={Creas} alt="Creas" />
          <h3>Creas Flor do Camará</h3>
          <p>
            Atender famílias e pessoas em situação de risco social ou que
            tiveram seus direitos violados. Oferece o Serviço de Proteção e
            Atendimento Especializado a Famílias e Indivíduos (PAEFI), bem como
            a Abordagem Social e Serviço para Pessoas com Deficiência, Idosas e
            suas famílias. Também oferta o serviço de Medidas Socioeducativas em
            Meio Aberto, e realiza orientação e encaminhamento para os serviços
            da assistência social ou demais serviços públicos existentes no
            município. Outros incluem a orientação jurídica, apoio à família,
            apoio no acesso à documentação pessoal.
          </p>
          <a href="#">Mais informações</a>
        </div>

        <div className={styles.card}>
          <img src={Cras} alt="logo Cras1" />
          <h3>Cras I, II, III, IV e V</h3>
          <p>
            Visa ofertar os serviços de Assistência Social com o objetivo de
            fortalecer a convivência com a família e com a comunidade. Promove a
            organização e articulação das unidades da rede socioassistencial e
            de outras políticas. Possibilita o acesso da população aos serviços
            benefícios e projetos de assistência social. Oferta o Serviço de
            Proteção e Atendimento Integral à Família e o Serviço de Convivência
            e Fortalecimento de Vínculos . Os cidadãos também são orientados
            sobre os benefícios assistenciais e podem ser inscritos no Cadastro
            Único para Programas Sociais do Governo Federal.
          </p>
          <a href="#">Mais informações</a>
        </div>
      </div>
        <Form />
    </>
  );
};

export default Sobre;