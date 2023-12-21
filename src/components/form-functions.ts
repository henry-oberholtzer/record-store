export const emailValidator = (email: string) => {
	if (!email) {
		return 'Email is required';
	} else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
		return 'Incorrect email format';
	}
	return '';
};

export const confirmPasswordValidator = (
	alertFunc: React.Dispatch<React.SetStateAction<string>>
) => {
	return (password: string) => {
		return (confirmPassword: string) => {
			if (!password) {
				alertFunc('A password is required');
				return false;
			} else if (password.length < 8) {
				alertFunc('A password must have a minimum 8 of characters');
				return false;
			} else if (!confirmPassword) {
				alertFunc('Please confirm your password');
				return false;
			} else if (confirmPassword.length < 8) {
				alertFunc('A password must have a minimum 8 of characters');
				return false;
			} else if (confirmPassword !== password) {
				alertFunc('Passwords do not match');
				return false;
			} else {
				return true;
			}
		};
	};
};

export const formInputUpdate = (
	setState: React.Dispatch<React.SetStateAction<object>>
) => {
	return (initState: object) => {
		return (e: React.FormEvent<HTMLInputElement>) => {
			setState({ ...initState, [e.currentTarget.name]: e.currentTarget.value });
		};
	};
};
