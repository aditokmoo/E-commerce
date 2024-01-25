import { Link } from 'react-router-dom';
// SCSS
import styles from './SideBar.module.scss';

export default function SideBar() {
	return (
		<aside className={styles.sideBar}>
			<ul>
				<li><Link to='/user/profile/dashboard' className={styles.active}>Dashboard</Link></li> 
				<li><Link to='/user/profile/orders'>Orders</Link></li>
				<li><Link to='/user/profile/address'>Address</Link></li>
				<li><Link to='/user/profile/details'>Account details</Link></li>
				<li><Link to='/user/profile/wishlist'>Wishlist</Link></li>
				<li><Link to='/user/profile/'>Logout</Link></li>
			</ul>
		</aside>
	);
}
