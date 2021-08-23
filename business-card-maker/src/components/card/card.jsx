import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({card}) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL
  } = card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={styles.card}>
      <img className={styles.img} src={url} alt="profile-pic" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

export default Card;
