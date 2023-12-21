import { useState } from 'react';
import { getAccount } from '../redux/slices/usersSlice';
import { useAppSelector, useAppDispatch } from './hooks/hooks';
import uuidByString from 'uuid-by-string';
import { setLocalUser } from '../redux/slices/localUserSlice';
import { formInputUpdate } from './form-functions';
import { signInData } from '../userTypes';

const LoginPage = () => {
	const [logInError, setLogInError] = useState<boolean>(false);
	const [form, setForm] = useState<signInData>({});
	const dispatch = useAppDispatch();
	const getAccountFromState = useAppSelector(getAccount);
	const dataUpdate = formInputUpdate(setForm)(form);

	const accessData = (email: string, password: string) => {
		const userObject = getAccountFromState[uuidByString(password, 5)];
		if (userObject && userObject.email === email) {
			dispatch(setLocalUser(userObject));
			setLogInError(false);
		} else {
			setLogInError(true);
		}
	};

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = form;
		if (email && password) {
			accessData(email, password);
		}
	};

	return (
		<div>
			<form onSubmit={(e) => onSubmitForm(e)}>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="email"
					onChange={(e) => dataUpdate(e)}
					required></input>
				<input
					id="password"
					type="password"
					name="password"
					placeholder="password"
					onChange={(e) => dataUpdate(e)}
					required></input>
				<button
					id="login"
					type="submit">
					Log In
				</button>
			</form>
			{logInError ? <p>No account linked to these credentials</p> : ''}
		</div>
	);
};

export default LoginPage;
