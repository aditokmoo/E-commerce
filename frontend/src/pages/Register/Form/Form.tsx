import { Link } from 'react-router-dom';
import { inputFieldData } from './InputFieldData/InputFieldData';
// Custom hooks
import { useSignup } from '../../../hooks/useAuth';
// SCSS
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { createUserType, inputFieldDataTypes } from '../../../shared/Types/types';

type inputType = "email" | "password" | "username" | "firstName" | "lastName" | "confirmPassword" | "phoneNumber" | "country" | "city" | "postalCode"


export default function Form() {
	const { register, handleSubmit, control } = useForm<createUserType>();
	const { mutate } = useSignup();

	return (
		<form onSubmit={handleSubmit((data: createUserType) => mutate(data))} noValidate>
			<div className={styles.formContainer}>
				{inputFieldData.map((inputData: inputFieldDataTypes, index: number) => (
					<div className={styles.inputContainer} key={index}>
						<label htmlFor={inputData.id}>{inputData.label} *</label>
						
						<input
							type={inputData.type}
							id={inputData.id}
							className={inputData.name}
							autoComplete="off"
							required
							{...register(inputData.id as inputType)}
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