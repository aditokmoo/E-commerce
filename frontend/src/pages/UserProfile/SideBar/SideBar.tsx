import { Link, useLocation, useNavigate } from 'react-router-dom';
// SCSS
import styles from './Sidebar.module.scss';
import { useLogout } from '../../../hooks/useAuth';
import { useAuthContext } from '../../../context/authContext';
import { MoonLoader } from 'react-spinners';

export default function Sidebar() {
	const { mutate, isPending } = useLogout();
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname.split('/')[3];

	if (isPending) return <MoonLoader color="#171717" className="loader" />

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
					dispatch({ type: 'RESET_AUTH' })
					navigate('/')
				}}>Logout</li>
			</ul>
		</aside>
	);
}
