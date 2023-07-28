import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import 'swiper/css'
import styles from '../styles/components/slider.module.css'

function App() {
  const [slidePerView, setSlidePerView] = useState(1)
  const data = [
    {
      id: "1",
      image:
        "https://media.licdn.com/dms/image/D5603AQFXyxjTUhdmFg/profile-displayphoto-shrink_800_800/0/1677683884083?e=2147483647&v=beta&t=icPdFp0_aohSNYPL5vnh9O5FkfqxHukeqlKxHCEVqKs",
    },
    {
      id: "2",
      image:
        "https://media.licdn.com/dms/image/D5603AQEGbzCZygQOgg/profile-displayphoto-shrink_800_800/0/1684790027491?e=2147483647&v=beta&t=qALsEdDY94VjWD90uhl0AQmZ2-oN6xNTSvxHq04eryk",
    },
    {
      id: "3",
      image:
        "https://media.licdn.com/dms/image/D4D03AQGufGtheZEk7Q/profile-displayphoto-shrink_800_800/0/1674262069053?e=2147483647&v=beta&t=JmTcdJ1WJR6y7KKytTVhHJxOhnn6TcdzPyxWkk1reOQ",
    },
    {
      id: "4",
      image:
        "https://media.licdn.com/dms/image/D4E03AQHiHXNib5jm4w/profile-displayphoto-shrink_800_800/0/1672328264312?e=1695859200&v=beta&t=7GSw9ayRtz6Ms9aCoKCVx8BZAxCEoewgTN6PXQ8rFW0",
    },
    {
      id: "5",
      image:
        "https://media.licdn.com/dms/image/D4D03AQF58ET-SWai3w/profile-displayphoto-shrink_800_800/0/1668181788589?e=1695859200&v=beta&t=OsX6H2OpVK7OEXaJFCTj03Hddpm_OWVd7duSUqe5Ljs",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className="title">Nossos voluntários</h1>
     
      <Swiper
      slidesPerview={slidePerView}
      pagination={{ clickable: true }}
      navigation
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image}
            alt="Slider"
            className="slide-item" />
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
        )
        }

export default App