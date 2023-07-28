import Header from "../components/Header"
import petra from "../assets/MinhaFoto.png"
import sobre from '../assets/pagina3.png'

const Sobre = () => {
  return (
    <>
      <Header  
        image={sobre} 
      />
      <h1>Quem é Petra Fernandes?</h1>

     <div className= "PerfilFoto" >
      <img src={petra} alt="" />
      <p> Sou Petra, de Recife-PE, tenho 23 anos. Sou Assistente Social de formação; conclui a graduação em dezembro de 2022, e iniciei os estudos de programação com a Reprograma em 2023. Antes "daqui" trabalhei em áreas muito diferentes, incluindo aprendizagem em atividades admnistrativas de umm supermercado da rede walmart. Já na faculdade, fiz dois anos de pesquisa na área de drogas e saúde mental, fui monitora, e estágiaria de Assistência Estudantil. Também trabalhei, mais recentemente, na secretária de Defesa Civil do município de Camaragibe, que foi  </p>
     </div>

    </>
  )
}

export default Sobre

