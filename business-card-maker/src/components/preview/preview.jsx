import React from 'react';
import styles from './preview.module.css';

const Preview = ({cards}) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {/* {
        cards.map(card => {

        })
      } */}
    </section>
  );
};

export default Preview;
