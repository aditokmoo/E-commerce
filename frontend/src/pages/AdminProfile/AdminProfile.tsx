import { Outlet } from 'react-router';
import Sidebar from './Sidebar/Sidebar';
// SCSS
import styles from './AdminProfile.module.scss'

export default function AdminProfile() {
  return (
    <section className={styles.adminSection}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </section>
  )
}
