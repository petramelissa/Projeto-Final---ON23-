import React from 'react';
import styles from '../styles/components/linkbox.module.css';

const LinkBox = ({ title, link }) => {
  return (
    <a href={link} className={styles.linkBox}>
      {title}
    </a>
  );
};

export default LinkBox;