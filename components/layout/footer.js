import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => (
  <footer>
    <div className={styles.footerminitext}>
      <Link href="/">by me in </Link>
      {new Date().getFullYear()}
      {' · '} <a href="https://github.com/llewellyndsouza/llewellyndsouza.github.io">{'made with <3 and Next.js'}</a>
    </div>
  </footer>
);

export default Footer;
