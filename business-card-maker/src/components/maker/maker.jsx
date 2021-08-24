import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
  ]);

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

  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
