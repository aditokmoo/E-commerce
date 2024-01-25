import { Link, useLocation, useNavigate } from 'react-router-dom';
// SCSS
import styles from './SideBar.module.scss';
import { useLogout } from '../../../hooks/useAuth';
import { useAuthContext } from '../../../context/authContext';

export default function SideBar() {
	const { mutate, isPending } = useLogout();
	const { setCurrentUser, setUserRole, setPersist } = useAuthContext();
	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname.split('/')[3];

	if(isPending) return <h2>Loading...</h2>

	return (
		<aside className={styles.sideBar}>
			<ul>
				<li><Link to='/user/profile/dashboard' className={pathname === 'dashboard' ? styles.active : undefined}>Dashboard</Link></li> 
				<li><Link to='/user/profile/orders' className={pathname === 'orders' ? styles.active : undefined}>Orders</Link></li>
				<li><Link to='/user/profile/address' className={pathname === 'address' ? styles.active : undefined}>Address</Link></li>
				<li><Link to='/user/profile/details' className={pathname === 'details' ? styles.active : undefined}>Account details</Link></li>
				<li><Link to='/user/profile/wishlist' className={pathname === 'wishlist' ? styles.active : undefined}>Wishlist</Link></li>
				<li onClick={() => {
					mutate();
					setCurrentUser(null);
					setUserRole(null);
					setPersist(false);
					navigate('/')
				}}>Logout</li>
			</ul>
		</aside>
	);
}
