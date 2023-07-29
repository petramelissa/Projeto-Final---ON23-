import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Card/card.module.css';

const Card = ({ icon, title, description, address, contact, link }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.cardInfo}>
        <h4 className={styles.cardSubtitle}>Endereço:</h4>
        <p>{address}</p>
        <h4 className={styles.cardSubtitle}>Contato:</h4>
        <p>{contact}</p>
      </div>
      <a href={link}>Mais informações</a>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;