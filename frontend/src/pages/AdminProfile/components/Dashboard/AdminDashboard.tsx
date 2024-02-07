import { useGetUser, useLogout } from "../../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../context/authContext";
// React icons
import { LiaBoxOpenSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { PiComputerTowerLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
// SCSS
import styles from './AdminDashboard.module.scss';
import { MoonLoader } from "react-spinners";

export default function AdminDashboard() {
    const { data, isLoading } = useGetUser()
    const { mutate, isPending } = useLogout();
    const { setCurrentUser, setUserRole, setPersist } = useAuthContext();
    const navigate = useNavigate();

    if (isLoading || isPending) return <MoonLoader color="#171717" className="loader" />

    return (
        <div className={styles.dashboard}>
              <h4>Hello {data.firstName} {data.lastName}</h4>
              <p>
                From your dashboard, you can view your recent orders, edit your
                billing and shipping addresses, and edit your password and
                account details.
              </p>
              <div className={styles.dashboardOptions}>
                <Link to='/admin/products' className={styles.option}>
                  <PiComputerTowerLight className={styles.icon}/>
                  <h3>Products</h3>
                </Link>
                <Link to='/admin/orders' className={styles.option}>
                  <LiaBoxOpenSolid className={styles.icon}/>
                  <h3>Orders</h3>
                </Link>
                <Link to='/admin/details' className={styles.option}>
                  <FaRegUser className={styles.icon}/>
                  <h3>Account details</h3>
                </Link>
                <div className={styles.option} onClick={() => {
                  mutate();
                  setCurrentUser(null);
                  setUserRole(null);
                  setPersist(false);
                  navigate('/')
                }}>
                  <CiLogout className={styles.icon}/>
                  <h3>Logout</h3>
                </div>
              </div>
            </div>
    )
}