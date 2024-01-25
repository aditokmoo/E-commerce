import { Outlet } from 'react-router';
import Header from '../../components/Header/Header'
import SideBar from './SideBar/SideBar';
// SCSS
import styles from './UserProfile.module.scss'

export default function UserProfile() {
  return (
    <>
      <Header />
      <section className={styles.userSection}>
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
