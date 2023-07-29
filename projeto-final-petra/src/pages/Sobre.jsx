import React, {useState} from 'react';
import Bf from '../assets/bf.svg';
import Card from '../components/Card/'
import Creas from '../assets/creas.svg';
import Cras from '../assets/1.svg'
import Mulher from '../assets/mulher.svg'
import Cras2 from '../assets/2.svg'
import Cras3 from '../assets/3.svg'
import Cras4 from '../assets/4.svg'
import Cras5 from '../assets/5.svg'
import foto from '../assets/pagina3.png';
import Header from "../components/Header";
import styles from '../styles/pages/sobre.module.css';

const Sobre = () => {
  return (
    <>
      <Header image={foto} />

      <main>
        <section className={styles.introSection}>
          <h2>Conecte-se com a rede</h2>
          <p>
            Aqui você pode encontrar os principais serviços do município.
          </p>
        </section>

       
        <section className={styles.sectionContainer}>
          <Card
            icon={Bf}
            title="Casa da Cidadania"
            description="O município dispõe de 1(um) espaço chamado Casa da Cidadania. 
            A casa da cidadania sedia os serviços sociais do Cadastro Único e Bolsa
            Família. Além dos serviços do CadÚnico, Tarifa Social Celpe e
            Serviço Social, no local também funcionará o Vem Livre Acesso,
            Cartão SUS, coordenação do BEM e a parte da Educação do Bolsa
            Família, com orientação para a população."
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />

          <Card
            icon={Creas}
            title="Creas Flor do Camará"
            description="O objetivo é atender famílias e pessoas em situação de risco social ou que
            tiveram seus direitos violados. Oferece o Serviço de Proteção e
            Atendimento Especializado a Famílias e Indivíduos (PAEFI), bem como
            a Abordagem Social e Serviço para Pessoas com Deficiência, Idosas e
            suas famílias. Também oferta o serviço de Medidas Socioeducativas em
            Meio Aberto, e realiza orientação e encaminhamento para os serviços
            da assistência social ou demais serviços públicos existentes no
            município. Outros incluem a orientação jurídica, apoio à família,
            apoio no acesso à documentação pessoal."
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />

          <Card
            icon={Cras}
            title="Cras I, II, III, IV e V"
            description="Visa ofertar os serviços de Assistência Social com o objetivo de
            fortalecer a convivência com a família e com a comunidade. Promove a
            organização e articulação das unidades da rede socioassistencial e
            de outras políticas. Possibilita o acesso da população aos serviços
            benefícios e projetos de assistência social. Oferta o Serviço de
            Proteção e Atendimento Integral à Família e o Serviço de Convivência
            e Fortalecimento de Vínculos . Os cidadãos também são orientados
            sobre os benefícios assistenciais e podem ser inscritos no Cadastro
            Único para Programas Sociais do Governo Federal."
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />


<Card
            icon={Cras2}
            title="Cras II"
            description=""
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />

<Card
            icon={Cras3}
            title="Cras III"
            description=""
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />

          <Card
            icon={Cras4}
            title="Cras IV"
            description=""
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />

          <Card
            icon={Cras5}
            title="Cras V"
            description=""
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />

<Card
            icon={Mulher}
            title="Coordenadoria da Mulher de Camaragibe"
            description=""
            address="Rua do Exemplo, 123 - Bairro do Exemplo"
            contact="(00) 1234-5678"
            link="#"
          />


          
        </section>
      </main>
    </>
  );
};

export default Sobre;