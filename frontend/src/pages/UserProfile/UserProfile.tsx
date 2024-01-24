import { Link } from 'react-router-dom'
import { useGetUser } from '../../hooks/useAuth'
import Header from '../../components/Header/Header'
// React icons
import { LiaBoxOpenSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart  } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
// SCSS
import styles from './UserProfile.module.scss'

export default function UserProfile() {
  const { data, isLoading } = useGetUser()

  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
      <Header />
      <section className={styles.userSection}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <aside className={styles.sideBar}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className={styles.active}>Dashboard</li>
                <li>Orders</li>
                <li>Address</li>
                <li>Account details</li>
                <li>Wishlist</li>
                <li>Logout</li>
              </ul>
            </aside>

            <div className={styles.profileSection}>
              <h4>Hello {data.firstName} {data.lastName}</h4>
              <p>
                From your dashboard, you can view your recent orders, edit your
                billing and shipping addresses, and edit your password and
                account details.
              </p>
              <div className={styles.sideBarOptions}>
                <div className={styles.option}>
                  <LiaBoxOpenSolid className={styles.icon}/>
                  <h3>Orders</h3>
                </div>
                <div className={styles.option}>
                  <IoLocationOutline className={styles.icon}/>
                  <h3>Address</h3>
                </div>
                <div className={styles.option}>
                  <FaRegHeart className={styles.icon}/>
                  <h3>Wishlist</h3>
                </div>
                <div className={styles.option}>
                  <FaRegUser className={styles.icon}/>
                  <h3>Account details</h3>
                </div>
                <div className={styles.option}>
                  <CiLogout className={styles.icon}/>
                  <h3>Logout</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
