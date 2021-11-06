import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { footerNavigation } from "../../config/footerNavigation";

const Footer = () => (
  <footer>
    <div className={styles.footerNav}>
      {footerNavigation.map((link) => (
        <Link key={link.name} href={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
    <div className={styles.copyright}>
      {"Copyright © "}
      <Link href="/">{"Llewellyn D'souza"}</Link> {new Date().getFullYear()}
      {" - "} <a href="https://github.com/llewellyndsouza/llewellyndsouza.github.io">{"Made with <3 and Next.js"}</a>
    </div>
  </footer>
);

export default Footer;
