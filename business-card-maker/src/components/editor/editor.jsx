import React from 'react';
import CardAddForm from '../card-add-form/card-add-form';
import CardEditForm from '../card-edit-form/card-edit-form';
import styles from './editor.module.css';

const Editor = ({cards, addCard, updateCard, deleteCard}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map(card => (
        <CardEditForm key={card.id} card={card} updateCard={updateCard} deleteCard={deleteCard} />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
