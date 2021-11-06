import styles from "../../styles/Header.module.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header>
      <div className={styles.leftHeader}>
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{type:"spring", damping: 9}}>
          {"Llewellyn D'souza"}
        </motion.div>
        <hr />
      </div>
      {/* <div className={styles.rightHeader}>{" "}</div> */}
    </header>
  );
}
