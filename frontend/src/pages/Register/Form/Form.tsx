import { Link } from 'react-router-dom';
import useHandleInputChange from './hooks/useHandleInputChange';
import { inputFieldData } from './InputField/InputFieldData/InputFieldData';
// Custom hooks
import { useSignup } from '../../../hooks/useAuth';
// React icons
import { FaInfoCircle } from "react-icons/fa";
// SCSS
import styles from './Form.module.scss';

export default function Form() {
	const { mutate } = useSignup();
	const { authData, setFocusAuth, handleInputChange } = useHandleInputChange();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				mutate(authData);
			}}
		>
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
							onChange={(e) =>
								handleInputChange(
									e.target.value,
									inputData.validation.minLength,
									inputData.validation.maxLength,
									inputData.validation.nameValid,
									e.target.id
								)}
							onFocus={() => setFocusAuth((prevState) => ({ ...prevState, [inputData.validation.nameFocus]: true }))}
							onBlur={() => setFocusAuth((prevState) => ({ ...prevState, [inputData.validation.nameFocus]: false }))}
							required
						/>
						<p id={inputData.id} className={inputData.validation.nameFocus && inputData.validation.nameValid ? styles.instructions : styles.offscreen}>
							<FaInfoCircle /> {inputData.validation.errMsg}
							<span className={styles.requiredTag}>Required</span>
						</p>
					</div>
				))}
			</div>

			<div className={styles.formFooter}>
				<button>Create account</button>
				<p>
					You already have account? <Link to="/user/login">Login</Link>
				</p>
			</div>
		</form>
	);
}