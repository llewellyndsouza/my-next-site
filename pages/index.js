import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Full-stack Developer">
      <div className={styles.intro}>
        <div className={styles.title}>Llewellyn Dsouza</div>
        <div className={styles.subtitle}>I am a Full-stack developer with a focus on backend technologies and I love trying out new things.</div>
        <div className={styles.icons}>
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
      </div>
    </Layout>
  );
}
