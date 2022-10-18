import { useState } from 'react';
import Header from './components/Header';
import styles from './App.module.scss';
import Profile from './assets/profile.svg';
import Luxembourg from './assets/luxembourg.svg';
import Brasil from './assets/brasil.svg';
import Instagram from './assets/instagram.svg';
import Github from './assets/github.svg';
import Linkedin from './assets/linkedin.svg';
import Phone from './assets/phone.svg';
import Email from './assets/email.svg';
import Location from './assets/location.svg';

function App() {
  let date = new Date();
  let year = date.getFullYear();
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

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
        {/* <div className={styles.projects} id="projects">
          <h1>Projetos</h1>
        </div> */}
        <div className={styles.contact} id="contact">
          <div className={styles.contactDetails}>
            <div className={styles.contactTitle}>
              <h1>Contato</h1>
            </div>
            <div className={styles.contactBox}>
              <div className={styles.contactPhone}>
                <img src={Phone} alt="" />
                <div className={styles.phoneInfo}>
                  <h2>Me ligue</h2>
                  <a href="tel:+5547996371053"><h4>+55(47)99637-1053</h4></a>
                </div>
              </div>
              <div className={styles.contactEmail}>
                <img src={Email} alt="" />
                <div className={styles.emailInfo}>
                  <h2>Email</h2>
                  <a href="mailto:igorbfranco@outrlook.com"><h4>igorbfranco@outlook.com.br</h4></a>
                </div>
              </div>
              <div className={styles.contactLocation}>
                <img src={Location} alt="" />
                <div className={styles.locationInfo}>
                  <h2>Localização</h2>
                  <h4>Itaiópolis - SC , Brasil</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <h1>Igor Bueno Franco</h1>
            <div className={styles.footerBox}>
                <a href="https://github.com/igBFranco" target="blank"><img src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/igorbuenofranco/" target="blank"><img src={Linkedin} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/igorbfranco/" target="blank"><img src={Instagram} alt="Instagram" /></a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
