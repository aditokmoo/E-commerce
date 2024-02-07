import { Link } from 'react-router-dom';
// Custom hooks
import { useSignup } from '../../hooks/useAuth';
// React icons
import { MdOutlineArrowBack } from 'react-icons/md';
// SCSS
import styles from './Register.module.scss';
import Form from './Form/Form';
import { useForm } from 'react-hook-form';
import { MoonLoader } from 'react-spinners';

export default function Register() {
	const { isPending } = useSignup();

	if (isPending) return <MoonLoader color="#171717" className="loader" />

	return (
		<div className={styles.register}>
			<Link to="/" className={styles.backBtn}>
				<MdOutlineArrowBack />
			</Link>
			<div className={styles.leftSection}>
				<h2>Create account</h2>
				<p>Welcome to the best web shop</p>
				<Form />
			</div>

			<div className={styles.rightSection} />
		</div>
	);
}
