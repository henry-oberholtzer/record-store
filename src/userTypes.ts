export interface logIn {
	username: string;
	nonSecurePassword: string;
}

export interface shippingAddress {
	streetName: string;
	city: string;
	country: string;
	state: string;
	zipCode: number;
	phoneNumber: string;
}

export interface cartItem {
	quantity: number;
	title: string;
	price: number;
	itemKey: string;
}

export interface savedCart {
	[key: cartItem['itemKey']]: cartItem;
}

export interface registrationData {
	password?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
}

export interface signInData {
	password?: string;
	email?: string;
}

export interface user {
	key: string;
	firstName: string;
	lastName: string;
	email: string;
}

export interface userLoggedIn {
	loggedIn: boolean;
	userData?: user;
}

export interface users {
	[key: string]: user;
}
