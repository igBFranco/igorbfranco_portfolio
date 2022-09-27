
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#about">Projetos</a></li>
                <li><a href="#about">Contato</a></li>
            </ul>
        </div>
    </div>
  );
}