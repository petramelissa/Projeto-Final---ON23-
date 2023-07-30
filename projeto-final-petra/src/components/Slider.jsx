import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import 'swiper/css'
import styles from '../styles/components/slider.module.css'
import SlideCard from '../components/SlideCard'
import profile from '../assets/MB.jpg'
function App() {
  const [slidePerView, setSlidePerView] = useState(1)
  const data = [
    {
      id: "1",
      image: "https://media.licdn.com/dms/image/D5603AQFXyxjTUhdmFg/profile-displayphoto-shrink_800_800/0/1677683884083?e=2147483647&v=beta&t=icPdFp0_aohSNYPL5vnh9O5FkfqxHukeqlKxHCEVqKs",
      name: "Petra Fernandes",
      description: "23 anos, Assistente Social Voluntária e idealizadora do projeto. Tem experiência com Assistência Estudantil, pesquisa na área de drogas e saúde mental, e experiência com Defesa Civil. Estudante de Front-End, é engajada nas áreas de política social, Política de Atenção a Crianças e Adolescentes.",
      
    },
    {
      id: "2",
      image: "https://media.licdn.com/dms/image/D4D03AQGufGtheZEk7Q/profile-displayphoto-shrink_800_800/0/1674262069053?e=2147483647&v=beta&t=JmTcdJ1WJR6y7KKytTVhHJxOhnn6TcdzPyxWkk1reOQ",
      name: "Ivanildo Barbosa",
      description: "24 anos, Assistente Social. Engajado nas áreas de política de educação, movimentos sociais, projetos e educação social. É pesquisador em inicío de carreira no centro Lemann.",
      
    },
    {
      id: "3",
      image: "https://media.licdn.com/dms/image/D4D03AQF58ET-SWai3w/profile-displayphoto-shrink_800_800/0/1668181788589?e=1695859200&v=beta&t=OsX6H2OpVK7OEXaJFCTj03Hddpm_OWVd7duSUqe5Ljs",
      name: "Stênio Ricardo",
      description: "30 anos, Professor, Mestre em História. Voluntário do projeto, engajado nas áreas de história do crime, saúde mental e controle social no século XX.",
      
    },
    {
      id: "4",
      image: "https://media.licdn.com/dms/image/D4E03AQHiHXNib5jm4w/profile-displayphoto-shrink_800_800/0/1672328264312?e=1695859200&v=beta&t=7GSw9ayRtz6Ms9aCoKCVx8BZAxCEoewgTN6PXQ8rFW0",
      name: "Alessandra Mota",
      description: "24 anos, Assistente Social. Experiência nas áreas de política social, expropriação, criança e adolescente e políticas públicas.",
      
    },
    {
      id: "5",
      image: "https://media.licdn.com/dms/image/D5603AQEGbzCZygQOgg/profile-displayphoto-shrink_800_800/0/1684790027491?e=1695859200&v=beta&t=W5j5kZEdmUvcjFhFluAtidgjSF1G2ZsUn8Elcg7Iq8k",
      name: "Lais Dativo",
      description: "26 anos, Assistente Social. Engajada nas áreas de política social, tem experiência no Núcleo de Atenção à Saúde do Idoso, e no Cras Dois Irmãos.",
      
    },
    {
      id: "6",
      image: profile,
      name: "Matheus Bandeira",
      description: "25 anos, Engenheiro Civil. Possui experiência no trabalho de desenvolvimento de ações em situações de desastres e risco (Defesa Civil).",
      
    },

  ];

  return (
    <div className={styles.container}>
      <Swiper slidesPerView={slidePerView} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideCard
              image={item.image}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default App;


