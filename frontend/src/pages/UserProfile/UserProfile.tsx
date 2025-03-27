import { Outlet } from 'react-router';
// SCSS
import styles from './UserProfile.module.scss'
import Sidebar from '../AdminProfile/Sidebar/Sidebar';

export default function UserProfile() {
  return (
    <section className={styles.userSection}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </section>
  )
}
