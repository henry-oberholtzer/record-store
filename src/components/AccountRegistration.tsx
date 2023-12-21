import { registrationData } from '../userTypes';
import { useAppDispatch } from './hooks/hooks';
import { useState } from 'react';
import getUuidByString from 'uuid-by-string';
import { createAccount } from '../redux/slices/usersSlice';
import { formInputUpdate } from './form-functions';

const AccountRegistration = () => {
	const [formEntryValid, setFormEntryValid] = useState<boolean>(true);
	const [newAccountData, setNewAccountData] = useState<registrationData>({});
	const updateData = formInputUpdate(setNewAccountData)(newAccountData);
	const dispatch = useAppDispatch();

	const dispatchNewAccount = () => {
		const signUpTime = Date.now();
		const { password, firstName, lastName, email } = newAccountData;
		if (password && firstName && lastName && email) {
			const data = {
				key: getUuidByString(password),
				firstName: firstName,
				lastName: lastName,
				email: email,
				memberSince: signUpTime,
			};
			dispatch(createAccount(data));
		} else {
			setFormEntryValid(false);
		}
	};

	return (
		<div>
			<h3>Register</h3>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					dispatchNewAccount();
				}}
				className="accountForm">
				<div className="accountFormGroup">
					<div className="accountFormInput">
						<label htmlFor="firstName">First Name:</label>
						<input
							required
							id="firstName"
							name="firstName"
							type="text"
							placeholder="First Name"
							onChange={(e) => updateData(e)}></input>
					</div>
					<div className="accountFormInput">
						<label htmlFor="lastName">Last Name:</label>
						<input
							required
							id="lastName"
							name="lastName"
							type="text"
							placeholder="Last Name"
							onChange={(e) => updateData(e)}></input>
					</div>
					<div className="accountFormInput">
						<label htmlFor="email">Last Name:</label>
						<input
							required
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							onChange={(e) => updateData(e)}></input>
					</div>
				</div>
				<div className="accountFormGroup">
					<div className="accountFormInput">
						<label htmlFor="password">Password:</label>
						<input
							required
							id="password"
							name="password"
							type="password"
							placeholder="Password"
							onChange={(e) => updateData(e)}></input>
					</div>
				</div>
				<div className="accountFormGroup">
					<button type="submit">Register</button>
				</div>
				{!formEntryValid ? <p>Please check your inputs & try again</p> : <></>}
			</form>
		</div>
	);
};

export default AccountRegistration;
