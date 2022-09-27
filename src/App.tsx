import React from 'react';
import Header from './components/Header';
import styles from './App.module.scss';
import Profile from './assets/profile.svg';

function App() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default App;
