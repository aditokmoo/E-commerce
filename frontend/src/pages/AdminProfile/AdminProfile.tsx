import { Outlet } from 'react-router';
import SideBar from './Sidebar/Sidebar';
// SCSS
import styles from './AdminProfile.module.scss'

export default function AdminProfile() {
  return (
    <section className={styles.adminSection}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <SideBar />
          <Outlet />
        </div>
      </div>
    </section>
  )
}
