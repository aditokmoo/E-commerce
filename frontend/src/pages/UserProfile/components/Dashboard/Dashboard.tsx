// React icons
import { LiaBoxOpenSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart  } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
// SCSS
import styles from './Dashboard.module.scss';
import { useGetUser } from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const { data, isLoading } = useGetUser()

    if (isLoading) return <h2>Loading...</h2>

    return (
        <div className={styles.dashboard}>
              <h4>Hello {data.firstName} {data.lastName}</h4>
              <p>
                From your dashboard, you can view your recent orders, edit your
                billing and shipping addresses, and edit your password and
                account details.
              </p>
              <div className={styles.dashboardOptions}>
                <Link to='/user/profile/orders' className={styles.option}>
                  <LiaBoxOpenSolid className={styles.icon}/>
                  <h3>Orders</h3>
                </Link>
                <Link to='/user/profile/address' className={styles.option}>
                  <IoLocationOutline className={styles.icon}/>
                  <h3>Address</h3>
                </Link>
                <Link to='/user/profile/wishlist' className={styles.option}>
                  <FaRegHeart className={styles.icon}/>
                  <h3>Wishlist</h3>
                </Link>
                <Link to='/user/profile/details' className={styles.option}>
                  <FaRegUser className={styles.icon}/>
                  <h3>Account details</h3>
                </Link>
                <Link to='/user/profile/dashboard' className={styles.option}>
                  <CiLogout className={styles.icon}/>
                  <h3>Logout</h3>
                </Link>
              </div>
            </div>
    )
}