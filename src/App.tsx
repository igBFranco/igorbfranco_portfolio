import React from 'react';
import Header from './components/Header';
import styles from './App.module.scss';
import Profile from './assets/profile.svg';
import Luxembourg from './assets/luxembourg.svg';
import Brasil from './assets/brasil.svg';

function App() {
  return (
    <div className={styles.container} id="home">
        <Header/>
        <div className={styles.primary}>
          <div className={styles.profile}>
            <img src={Profile} alt="Igor Bueno Franco" />
            <div className={styles.greeting}>
              <h2>Olá,</h2>
              <h3>eu sou o</h3>
              <h3>Igor Bueno Franco</h3>
            </div>
          </div>
        </div>
        <div className={styles.about} id="about">
          <h1>Sobre</h1>
          <div className={styles.aboutText}>
            <div className={styles.aboutLeft}>
              <p>
                Brasileiro e Luxemburguês, dedicado em buscar novos conhecimentos e oportunidades em tecnologia.
              </p>
              <img src={Luxembourg} alt="Luxembourg Flag" />
              <img src={Brasil} alt="Brasil Flag" />
            </div>
            <div className={styles.aboutRight}>
              <p>
              Apaixonado por Tecnologia desde sempre. Hoje com 22 anos, acadêmico de Engenharia de Software pela Universidade do Contestado - UnC.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
