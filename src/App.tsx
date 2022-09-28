import React from 'react';
import Header from './components/Header';
import styles from './App.module.scss';
import Profile from './assets/profile.svg';
import Luxembourg from './assets/luxembourg.svg';
import Brasil from './assets/brasil.svg';
import Instagram from './assets/instagram.svg';
import Github from './assets/github.svg';
import Linkedin from './assets/linkedin.svg';

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
              <h4>Desenvolvedor Web e Mobile</h4>
            </div>
          </div>
        </div>
        <div className={styles.about} id="about">
          <h1>Sobre mim</h1>
          <div className={styles.aboutText}>
            <div className={styles.aboutLeft}>
              <p>
                Olá, sou o Igor Bueno Franco. Brasileiro e Luxemburguês, Desenvolvedor Web e Mobile.
              </p>
              <div className={styles.flags}>
                <img src={Brasil} alt="Brasil Flag" />
                <img src={Luxembourg} alt="Luxembourg Flag" />
              </div>
            </div>
            <div className={styles.aboutRight}>
              <p>
                Apaixonado por Tecnologia desde sempre. Hoje com 22 anos, acadêmico de Engenharia de Software pela Universidade do Contestado - UnC.
              </p>
              <div className={styles.socials}>
                <a href="https://github.com/igBFranco" target="blank"><img src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/igorbuenofranco/" target="blank"><img src={Linkedin} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/igorbfranco/" target="blank"><img src={Instagram} alt="Instagram" /></a>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projects} id="projects">
          <h1>Projetos</h1>
        </div>
        <div className={styles.contact} id="contact">
          <h1>Contato</h1>
        </div>
    </div>
  );
}

export default App;
