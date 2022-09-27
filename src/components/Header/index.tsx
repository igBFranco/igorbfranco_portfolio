
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </div>
    </div>
  );
}