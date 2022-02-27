import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Layout () {
  return (
    <footer className={styles.footer}>
      <a
        href="https://rglvn.com"
        rel="noopener noreferrer"
      >
        © PelotonU |
        <span className={styles.logo}>
          <Image src="/r.png" alt="Rodolfo J. Galván Martínez Developer Logo" width={16} height={16} />
        </span>
        | 2022
        
      </a>
    </footer>
  )
}