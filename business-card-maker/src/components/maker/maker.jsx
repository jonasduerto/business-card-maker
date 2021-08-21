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
      name: 'SJ',
      company: 'LFZ',
      theme: 'light',
      title: 'Web Developer',
      email: 'sjskybone@gmail.com',
      message: 'go for it',
      fileName: 'sj',
      fileURL: 'sj.png'
    },
    {
      id: '2',
      name: 'Amy',
      company: 'Bear Fruit',
      theme: 'light',
      title: 'Operation Manager',
      email: 'hyelim-h@hotmail.com',
      message: 'just do it',
      fileName: 'amy',
      fileURL: 'amy.png'
    },
    {
      id: '3',
      name: 'Hyebbu',
      company: 'OW',
      theme: 'light',
      title: 'Healer',
      email: 'hyebbu@gmail.com',
      message: 'heal me',
      fileName: 'hyebbu',
      fileURL: 'hyebbu.png'
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
