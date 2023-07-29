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
import Seas from '../assets/SEAS.svg'
import foto from '../assets/pagina3.png';
import Header from "../components/Header";
import styles from '../styles/pages/sobre.module.css';
import Linkbox from '../components/Linkbox.jsx'

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
          <div className={styles.linkBoxesContainer}>
            <Linkbox title=" O que é Rede de Assistência e Proteção Social?" link="https://www.gov.br/pt-br/categorias/assistencia-social/rede-de-assistencia-e-protecao-social" />
            <Linkbox title="CRAS" link="https://www.gov.br/pt-br/servicos/acessar-o-cras-centro-de-referencia-da-assistencia-social" />
            <Linkbox title="CREAS" link="https://www.gov.br/pt-br/servicos/acessar-creas-centro-de-referencia-especializado-em-assistencia-social" />
          </div>
        </section>

       
        <section className={styles.sectionContainer}>
          <Card
            icon={Bf}
            title="Casa da Cidadania"
            description="O município dispõe de 1(uma)Casa da Cidadania. 
            A casa da cidadania sedia os serviços sociais do Cadastro Único e Bolsa
            Família. Além dos serviços do CadÚnico, Tarifa Social Celpe e
            Serviço Social, no local também funcionará o Vem Livre Acesso,
            Cartão SUS, coordenação do BEM e a parte da Educação do Bolsa
            Família, com orientação para a população."
            address="Av. Dr. Belmino Correia, 2824 - Timbi, Camaragibe - PE, 54759-000"
            contact="(81) 99945-2936"
            link="https://agendamento.camaragibe.pe.gov.br/"
          />

          <Card
            icon={Creas}
            title="CREAS Flor do Camará"
            description="O objetivo é atender famílias e pessoas em situação de risco social ou que
            tiveram seus direitos violados. Oferece o Serviço de Proteção e
            Atendimento Especializado a Famílias e Indivíduos (PAEFI), bem como
            a Abordagem Social e Serviço para Pessoas com Deficiência, Idosas e
            suas famílias. Também oferta o serviço de Medidas Socioeducativas em
            Meio Aberto, e realiza orientação e encaminhamento para os serviços
            da assistência social ou demais serviços públicos existentes no
            município. Outros incluem a orientação jurídica, apoio à família,
            apoio no acesso à documentação pessoal."
            address="R. Telemaco Borba, 247 - Timbi, Camaragibe - PE, 54768-080"
            contact="(81) 3090-9553"
            link="https://www.instagram.com/creasflordocamara/?hl=en"
          />

          <Card
            icon={Cras}
            title="CRAS I"
            description="Camaragibe conta com 5(cinco) CRAS. Os Centros de Referência em Assistencia Social ofertam os serviços de Assistência Social com o objetivo de
            fortalecer a convivência com a família e com a comunidade. Promove a
            organização e articulação das unidades da rede socioassistencial e
            de outras políticas. Possibilita o acesso da população aos serviços
            benefícios e projetos de assistência social. Oferta o Serviço de
            Proteção e Atendimento Integral à Família e o Serviço de Convivência
            e Fortalecimento de Vínculos . Os cidadãos também são orientados
            sobre os benefícios assistenciais e podem ser inscritos no Cadastro
            Único para Programas Sociais do Governo Federal."
            address="R. Telemaco Borba, 2059 - Timbi, Camaragibe - PE, 54768-080"
            contact="(81) 3050-0880"
            link="https://camaragibe.pe.gov.br/centros-de-referencia-de-assistencia-social/"
          />


<Card
            icon={Cras2}
            title="CRAS"
            description="II"
            address="Av. Dr. Belmino Correia, 4214 - Estacao Nova, Camaragibe - PE, 54774-000"
            contact="(81) 99945-8843 / (81) 3458-4601"
            link="https://www.programabolsadafamilia.com.br/cras-ii-alberto-maia-camaragibe-pe/"
          />

<Card
            icon={Cras3}
            title="CRAS"
            description="III"
            address="Rua Severino Santos nº 69 – Vila da Fábrica
            CEP: 54759-550"
            contact="(81) 3129-2094"
            link="#"
          />

          <Card
            icon={Cras4}
            title="CRAS"
            description="IV"
            address="Rua Aprígio Alves nº 223 – Tabatinga
            CEP: 54756-784"
            contact="(81) 3456-4910"
            link="#"
          />

          <Card
            icon={Cras5}
            title="CRAS"
            description="V"
            address="Rua Lauro Muller, nº 48, Vera Cruz
            CEP: 54786-200"
            contact="(81)3459-5506"
            link="#"
          />

<Card
            icon={Mulher}
            title="Coordenadoria da Mulher de Camaragibe"
            description="CEAM"
            address="Rua 13 de Maio, 140 - Timbí"
            contact=" Atendimento de Segunda à Sexta das 8h00 às 14h00     (81) 3456-5542"
            link="https://www.instagram.com/coordenadoriadamulhercamara/?hl=en"
          />


<Card
            icon={Seas}
            title="Secretaria de Assistência Social"
            description="A Secretaria de Assistência Social é responsável por garantir a assistência social aos moradores do município. Isso inclui implementar políticas públicas para assegurar direitos, prevenir e proteger os cidadãos, além de promover ações assistenciais de proteção básica e especial. A secretaria também se encarrega de garantir o funcionamento e a coordenação dos conselhos sociais, bem como outras atividades relacionadas à sua área de atuação."
            address="Rua Treze de Maio, Nº54 - Timbi - Camaragibe - PE
            CEP: 54765-360"
            contact="Atendimento de Segunda à Sexta das 8h00 às 17h00. E-mail para contato:
            seas@camaragibe.pe.gov.br
          (81)3058-6051 / (81)3050-0335"
            link="https://www.instagram.com/coordenadoriadamulhercamara/?hl=en"
          />

        </section>
      </main>
    </>
  );
};

export default Sobre;