import Creas from '../assets/creas.svg'
import Cras from '../assets/1.svg'
import bf from '../assets/bf.svg'
import { FcAddressBook } from "react-icons/fc";


<main className={styles.containerMainServiços}>
        <div className={styles.card}>
        <Title content="Creas: Flor do Camará" />
        <image img={Creas} />
          <h2 className={styles.title}> Qual o objetivo do Creas? </h2>
            <p>
            Atender famílias e pessoas em situação de risco social ou 
            que tiveram seus direitos violados.
            </p>
            <h2 className={styles.title}> Quais os serviços? </h2>
            <p>
            Serviço de Proteção e Atendimento Especializado a Famílias e Indivíduos (PAEFI), 
           bem como a Abordagem Social e Serviço para Pessoas com Deficiência, Idosas e suas famílias. 
           Também oferta o serviço de Medidas Socioeducativas em Meio Aberto, e realiza orientação e encaminhamento
            para os serviços da assistência social ou demais serviços públicos existentes no município. 
            Outros Serviços: orientação jurídica, apoio à família, apoio no acesso à documentação pessoal.
            </p>

            <FcAddressBook className={styles.imgContatos}color="#AE2983" weight="fill" size={30}/>



             <div className={style.Card}>
        <Title content="Cras: I,II,III,IV e V" />
        <image img={Cras} />
          <h2 className={styles.title}> Qual o objetivo dos Cras? </h2>
            <p>
            Porta de entrada da Assistência Social, visa ofertar
             os serviços de Assistência Social, com o objetivo de fortalecer a convivência 
             com a família e com a comunidade.  Promove a organização e articulação das unidades da rede socioassistencial 
             e de outras políticas. Assim, possibilita o acesso da população aos serviços, 
             benefícios e projetos de assistência social.
            </p>
            <h2 className={styles.title}> Quais os serviços? </h2>
            <p>
            Oferta o Serviço de Proteção e Atendimento Integral à Família (Paif) 
            e o Serviço de Convivência e Fortalecimento de Vínculos (SCFV). 
            No Cras, os cidadãos também são orientados sobre os benefícios assistenciais 
            e podem ser inscritos no Cadastro Único para Programas Sociais do Governo Federal.
            </p>

            <FcAddressBook className={styles.imgContatos}color="#AE2983" weight="fill" size={30}/>
            <h2 className={styles.title}> Endereços </h2>
             <p> I:Rua Telemarco Borba Nº 239
CEP: 54768-080/ II:Avenida Doutor Belmino Correia nº 4214-A, Estação Nova
CEP: 54774-000/ III: Rua Severino Santos nº 69 – Vila da Fábrica
CEP: 54759-550/ IV:Rua Aprígio Alves nº 223 – Tabatinga
CEP: 54756-784/ V:Rua Lauro Muller, nº 48, Vera Cruz
CEP: 54786-200 </p>
             <h2 className={styles.title}> Contato </h2>
             <p>I: 81 3050-0880/ II: 81 3458-4601/ III: 81 3129-2094 IV: 81 3456-4910 V: 81 3459-5506</p>

             <div className={BF}>
        <Title content="Casa da Cidadania e Bolsa Família" />
        <image img={bf} />
          <h2 className={styles.title}> Qual o objetivo do Casa da cidadania? </h2>
            <p>
            Sediar os serviços sociais do Cadastro Único e Bolsa Família.
            </p>
            <h2 className={styles.title}> Quais os serviços? </h2>
            <p>
            Além dos serviços do CadÚnico, Tarifa Social Celpe e Serviço Social, no local também funcionará o Vem Livre Acesso, Cartão SUS, coordenação do BEM e a parte da Educação do Bolsa Família, com orientação para a população. 
            </p>


            <FcAddressBook className={styles.imgContatos}color="#AE2983" weight="fill" size={30}/>
            <h2 className={styles.title}> Endereço </h2>
            Avenida Belmino Correia, n°2188 - Timbi
             <p> </p>

      </main>
    </>

    {
      imageUrl: Cras,
      title: 'Cras',
      description: 'O município dispõe de 5 unidades de Cras ativos',
      address: 'Rua Telemarco Borba Nº 239 - Av Doutor Belmino Correia nº 4214,
      contact: '8130500880',
      why: '',
    },



    const App = () => {
  const cardsData = [
    {
      imageUrl: Creas,
      title: 'Creas: Flor do Camará',
      description: 'O município dispõe de 1(um) Creas',
      address: 'Rua Telemarco Borba, 247, Timbí',
      contact: ' 81 3090-9553 E-mail: creas.seas@camaragibe.pe.gov.br',
      why: 'Atender famílias e pessoas em situação de risco social ou que tiveram seus direitos violados.',
      objectives: 'Serviço de Proteção e Atendimento Especializado a Famílias e Indivíduos (PAEFI), bem como a Abordagem Social e Serviço para Pessoas com Deficiência, Idosas e suas famílias. Também oferta o serviço de Medidas Socioeducativas em Meio Aberto, e realiza orientação e encaminhamento para os serviços da assistência social ou demais serviços públicos existentes no município. Outros incluem a orientação jurídica, apoio à família, apoio no acesso à documentação pessoal.',
    },
    {
      imageUrl: Bf,
      title: 'Casa da Cidadania/Bolsa Família',
      description: 'O município dispõe de 1(um) espaço chamado Casa da Cidadania',
      address: 'Avenida Belmino Correia, n°2188 - Timbi',
      contact: 'N/A',
      why: 'Sede dos serviços sociais do Cadastro Único e Bolsa Família.',
      objectives: 'Além dos serviços do CadÚnico, Tarifa Social Celpe e Serviço Social, no local também funcionará o Vem Livre Acesso, Cartão SUS, coordenação do BEM e a parte da Educação do Bolsa Família, com orientação para a população.',
    },
  ];
<div className="App">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            address={card.address}
            contact={card.contact}
            why={card.why}
            objectives={card.objectives}
          />