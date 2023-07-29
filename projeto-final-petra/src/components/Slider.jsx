import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import 'swiper/css'
import styles from '../styles/components/slider.module.css'

function App() {
  const [slidePerView, setSlidePerView] = useState(1)
  const data = [
    {
      id: "1",
      image: "https://media.licdn.com/dms/image/D5603AQFXyxjTUhdmFg/profile-displayphoto-shrink_800_800/0/1677683884083?e=2147483647&v=beta&t=icPdFp0_aohSNYPL5vnh9O5FkfqxHukeqlKxHCEVqKs",
      name: "Petra Fernandes",
      description: "23 anos, Assistente Social Voluntária, engajada nas áreas de política social, criança e adolescente e saúde mental",
    },
    {
      id: "2",
      image: "https://media.licdn.com/dms/image/D4D03AQGufGtheZEk7Q/profile-displayphoto-shrink_800_800/0/1674262069053?e=2147483647&v=beta&t=JmTcdJ1WJR6y7KKytTVhHJxOhnn6TcdzPyxWkk1reOQ",
      name: "Ivanildo Barbosa",
      description: "24 anos, Assistente Social Voluntário, engajada nas áreas de política de educação, fome e movimentos sociais, e pesquisador iniciante no centro Lenman.",
    },
    {
      id: "3",
      image: "https://media.licdn.com/dms/image/D5603AQFXyxjTUhdmFg/profile-displayphoto-shrink_800_800/0/1677683884083?e=2147483647&v=beta&t=icPdFp0_aohSNYPL5vnh9O5FkfqxHukeqlKxHCEVqKs",
      name: "Stênio Ricardo",
      description: "30 anos, Professor, Mestre em História das Drogas, Voluntário do projeto, engajada nas áreas de drogas e saúde mental.",
    },
    {
      id: "4",
      image: "https://media.licdn.com/dms/image/D5603AQFXyxjTUhdmFg/profile-displayphoto-shrink_800_800/0/1677683884083?e=2147483647&v=beta&t=icPdFp0_aohSNYPL5vnh9O5FkfqxHukeqlKxHCEVqKs",
      name: "Alessandra Mota",
      description: "24 anos, Assistente Social Voluntária, engajada nas áreas de política social, expropriação, criança e adolescente e políticas públicas.",
    },
    {
      id: "5",
      image: "https://media.licdn.com/dms/image/D5603AQFXyxjTUhdmFg/profile-displayphoto-shrink_800_800/0/1677683884083?e=2147483647&v=beta&t=icPdFp0_aohSNYPL5vnh9O5FkfqxHukeqlKxHCEVqKs",
      name: "Lais Dativo",
      description: "26 anos, Assistente Social Voluntária, engajada nas áreas de política social, experiência no Núcleo de Atenção à Saúde do Idoso, e no Cras.",
    },
    // Adicione mais itens com os detalhes dos outros voluntários
  ];

  return (
    <div className={styles.container}>
      <h1 className="title">Nossos voluntários</h1>
      <Swiper
        slidesPerView={slidePerView} // Corrija o nome do atributo para slidesPerView
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;