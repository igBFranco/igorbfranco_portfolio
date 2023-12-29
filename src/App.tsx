import Header from './components/Header';
import styles from './App.module.scss';
import Profile from './assets/profile.svg';
import Instagram from './assets/instagram.svg';
import Github from './assets/github.svg';
import Linkedin from './assets/linkedin.svg';
import Email from './assets/email.svg';
import Location from './assets/location.svg';
import Carousel from './components/Carousel';
import Brasil from './assets/brasil.svg';
import Luxembourg from './assets/luxembourg.svg';
import LogoDark from './assets/LogoDark.svg'


function App() {
  
  const images = [Brasil, Luxembourg];

  return (
    <div className={styles.container} id="home">
        <Header/>
        <div className={styles.primary}>
          <div className={styles.profile}>
            {/* <img src={Profile} alt="Igor Bueno Franco" /> */}
            {/* <div className={styles.greeting}>
              <h3>Olá,</h3>
              <h3>eu sou o</h3>
              <h3>Igor Bueno Franco</h3>
            </div> */}
          </div>
          <div className={styles.greetingText}>
            <h2>Web and Mobile Developer, focused on providing high-quality digital experiences.</h2>
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
                Apaixonado por Tecnologia desde sempre. Hoje com 23 anos, Engenheiro de Software pela Universidade do Contestado - UnC.
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.projects} id="projects">
          <h1>Projetos</h1>
        </div> */}
        <div className={styles.contact} id="contact">
          <div className={styles.contactDetails}>
            <div className={styles.contactTitle}>
              <h1>LET'S DEVELOP</h1>
              <h2>Something amazing togheter</h2>
            </div>
            <div className={styles.contactButton}>
              <a href="mailto:contato@igorbuenofranco.com">get in touch</a>
            </div>
          </div>
          {/* <Carousel images={images}/> */}
          <div className={styles.footer}>
            <div className={styles.logo}>
              <img src={LogoDark} alt="Logo" />
              <div className={styles.footerBox}>
                  <a href="https://github.com/igBFranco" target="blank"><img src={Github} alt="Github" /></a>
                  <a href="https://www.linkedin.com/in/igorbuenofranco/" target="blank"><img src={Linkedin} alt="Linkedin" /></a>
                  <a href="https://www.instagram.com/igorbfranco/" target="blank"><img src={Instagram} alt="Instagram" /></a>
              </div>
            </div>
            <div className={styles.copyright}>
              <h4>© Igor Bueno Franco | 2023</h4>
            </div>
            <div className={styles.footerMenu}>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  {/* <li><a href="#projects">Projetos</a></li> */}
                  <li><a href="#contact">Contact Me</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
