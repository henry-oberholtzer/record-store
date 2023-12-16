import { useState } from "react";
import { getAccount } from "../redux/slices/usersSlice";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import uuidByString from "uuid-by-string";
import { setLocalUser } from "../redux/slices/localUserSlice";

const LoginPage = () => {
	const dispatch = useAppDispatch();
	const [usernameField, setUsernameField] = useState<string>("");
	const [passwordField, setPasswordField] = useState<string>("");
	const getAccountFromState = useAppSelector(getAccount);
	const [logInError, setLogInError] = useState<boolean>(false);

	const accessData = (username: string, password: string) => {
		const userObject = getAccountFromState[uuidByString(password, 5)];
		console.log(userObject);
		if (userObject && userObject.username === username) {
			dispatch(setLocalUser(userObject));
			setLogInError(false);
		} else {
			setLogInError(true);
		}
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (usernameField !== undefined && passwordField !== undefined) {
						accessData(usernameField, passwordField);
					}
				}}>
				<input
					id="username"
					type="text"
					value={usernameField}
					placeholder="username"
					onChange={(e) => setUsernameField(e.target.value)}
					required></input>
				<input
					id="password"
					type="text"
					value={passwordField}
					placeholder="password"
					onChange={(e) => setPasswordField(e.target.value)}
					required></input>
				<button id="login" type="submit">
					Log In
				</button>
			</form>
			{logInError ? <p>No account linked to these credentials</p> : ""}
		</div>
	);
};

export default LoginPage;
