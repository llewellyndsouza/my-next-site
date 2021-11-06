import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.leftHeader}>{"Llewellyn D'souza"}</div>
      <div className={styles.rightHeader}>Welcome to my page</div>
    </header>
  );
}
