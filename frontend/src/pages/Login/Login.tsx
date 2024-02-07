import { Link } from 'react-router-dom';
// Custom hooks
import { useLogin } from '../../hooks/useAuth';
// Components
import Form from './Form/Form';
// React icons
import { MdOutlineArrowBack } from 'react-icons/md';
// SCSS
import styles from './Login.module.scss';
import { MoonLoader } from 'react-spinners';

export default function Login() {
	const { isPending } = useLogin();

	if(isPending) return <MoonLoader color="#171717" className="loader" />

	return (
		<div className={styles.login}>
			<Link to="/" className={styles.backBtn}>
				<MdOutlineArrowBack />
			</Link>
			<div className={styles.leftSection}>
				<h2>Sign In</h2>
				<p>Welcome to the best web shop</p>
				<Form />
			</div>
			<div className={styles.rightSection} />
		</div>
	);
}
