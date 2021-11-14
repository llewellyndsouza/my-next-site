import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { ThemeContext } from './_app';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

export default function Home() {
  const theme = useContext(ThemeContext);

  const toggleTheme = () => {
    theme.setDark((s) => !s);
  };

  return (
    <Layout title="Full-stack Developer">
      <div className={styles.intro}>
        <div className={styles.subtitle}>Hey there! </div>

        <div className={styles.title}>
          <span className={styles.pretitle}>{"I'm"} </span>
          {'Llewellyn'}
        </div>
        <div className={styles.subtitle}>and I am a Full-stack developer with a focus on backend technologies and I love trying out new things.</div>
        <div className={`${styles.icons} ${theme.dark ? styles.darkSelected : ''}`}>
          <a href="https://github.com/llewellyndsouza" className={styles.icon}>
            <img src="/github.svg" alt="Check out my git" width={48} height={48} />
          </a>
          <a href="mailto: lledsouza2209@gmail.com" className={styles.icon}>
            <img src="/mail.svg" alt="Get in touch" width={48} height={48} />
          </a>
          {/* <a className={styles.icon}>
            <img src="/linkedin.svg" alt="Notice me" width={48} height={48} />
          </a> */}
        </div>
        <div className={styles.themeSelector}>
          <div className={`${styles.themeSwitch} ${theme.dark ? styles.darkSelected : ''}`} onClick={toggleTheme}>
            <motion.div className={`${styles.themeHandle} ${theme.dark ? styles.darkSelected : ''}`} layout transition={spring} />
          </div>
          <div className={styles.themeSelectorText}>{theme.dark ? 'Too light?' : 'Too bright?'}</div>
        </div>
      </div>
    </Layout>
  );
}
