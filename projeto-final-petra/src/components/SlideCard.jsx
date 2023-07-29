import React from 'react';
import styles from '../styles/components/slideCard.module.css';

function SlideCard({ image, name, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="Slider" className={styles.slideImage} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SlideCard;
