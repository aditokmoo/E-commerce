import { Link } from 'react-router-dom';
import { inputFieldData } from './InputFieldData/InputFieldData';
// Custom hooks
import { useSignup } from '../../../hooks/useAuth';
// React icons
import { FaInfoCircle } from "react-icons/fa";
// SCSS
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';

export default function Form() {
	const { register, handleSubmit, control } = useForm();
	const { mutate } = useSignup();

	return (
		<form onSubmit={handleSubmit((data) => mutate(data))} noValidate>
			<div className={styles.formContainer}>
				{inputFieldData.map((inputData: any, index: number) => (
					<div className={styles.inputContainer} key={index}>
						<label htmlFor={inputData.id}>{inputData.label} *</label>
						
						<input
							type={inputData.type}
							id={inputData.id}
							value={inputData.value}
							className={inputData.className}
							autoComplete="off"
							required
							{...register(inputData.id)}
						/>
					</div>
				))}
			</div>

			<div className={styles.formFooter}>
				<button>Create account</button>
				<p>
					You already have account? <Link to="/user/login">Login</Link>
				</p>
			</div>
			<DevTool control={control} />
		</form>
	);
}