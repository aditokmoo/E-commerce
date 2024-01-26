import { Outlet } from 'react-router';
import Header from '../../components/Header/Header'
import SideBar from './Sidebar/Sidebar';
// SCSS
import styles from './AdminProfile.module.scss'

export default function AdminProfile() {
  return (
    <>
      <Header />
      <section className={styles.adminSection}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <SideBar />
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}
