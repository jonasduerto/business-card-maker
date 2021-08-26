import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService}) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'Reinhardt Wilhelm',
      company: 'Overwatch',
      theme: 'dark',
      title: 'Main Tank',
      email: 'beerholic@overwatch.com',
      message: 'All I need is Vibranium shield',
      fileName: 'reinhardt',
      fileURL: 'reinhardt.png'
    },
    '2': {
      id: '2',
      name: 'Aleksandra Zaryanova',
      company: 'Russian Defense Forces',
      theme: 'light',
      title: 'Sub Tank',
      email: 'whatissummer@rdforce.com',
      message: 'Together, we are strong',
      fileName: 'zarya',
      fileURL: null
    },
    '3': {
      id: '3',
      name: 'Elizabeth Caledonia "Calamity" Ashe',
      company: 'Deadlock Gang',
      theme: 'colorful',
      title: 'Hitscan DPS',
      email: 'wishbobissmarter.dgang.com',
      message: 'Please do the right thing, Bob',
      fileName: 'ashe',
      fileURL: null
    },
    '4': {
      id: '4',
      name: 'Genji Shimada',
      company: 'Overwatch',
      theme: 'dark',
      title: 'Projectile DPS',
      email: 'shimadamada@overwatch.com',
      message: 'Tell me where to buy Adamantium blade',
      fileName: 'genji',
      fileURL: null
    },
    '5': {
      id: '5',
      name: 'Lucio Correia dos Santos',
      company: 'Freelance DJ',
      theme: 'light',
      title: 'Main Healer',
      email: 'beatcoin@freedom.com',
      message: 'Drop the beat',
      fileName: 'lucio',
      fileURL: null
    },
    '6': {
      id: '6',
      name: 'Ana Amari',
      company: 'Overwatch',
      theme: 'colorful',
      title: 'Sub Healer',
      email: 'jigglypuff@overwatch.com',
      message: 'Do not fall asleep on the street',
      fileName: 'ana',
      fileURL: null
    }
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;

      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];

      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
