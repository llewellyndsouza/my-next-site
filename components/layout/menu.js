import Link from 'next/link';
import { menuNavigation } from '../../config/menuNavigation';
// import styles from '../../styles/Menu.module.css';

const Menu = () => (
  <div>
    {menuNavigation.map((nav, idx) => (
      <div key={idx}>
        <Link href={nav.path}>{nav.name}</Link>
      </div>
    ))}
  </div>
);

export default Menu;
