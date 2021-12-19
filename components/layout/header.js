import styles from '../../styles/Header.module.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default function Header() {
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      {/* Theme Selector Switch - Starts */}
      <div className={styles.themeSelector}>
        <div className={`${styles.themeSwitch} ${isThemeDark ? styles.darkSelected : ''}`} onClick={toggleTheme}>
          <motion.div className={`${styles.themeHandle} ${isThemeDark ? styles.darkSelected : ''}`} layout transition={spring} />
        </div>
        <div className={styles.themeSelectorText}>{isThemeDark ? 'Too bright?' : 'Too dark?'}</div>
      </div>
      {/* Theme Selector Switch - Ends */}
    </header>
  );
}
