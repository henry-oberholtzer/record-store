export interface logIn {
	username: string;
	nonSecurePassword: string;
}

export interface shippingAddress {
	addressTo: string;
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
	[key: cartItem["itemKey"]]: cartItem;
}

export const RECIEVED = "RECIEVED";
export const SHIPPED = "SHIPPED";
const CANCELLED = "CANCELLED";
const REFUNDED = "REFUNDED";

export interface pastOrders {
	[key: string]: {
		date: Date;
		status:
			| typeof RECIEVED
			| typeof SHIPPED
			| typeof CANCELLED
			| typeof REFUNDED;
		order: savedCart;
	};
}

export interface userDataPayload {
	key: string;
	user: user;
}

export interface user {
	username: string;
	memberSince: Date;
	lastSeen: Date;
	shippingAddress: shippingAddress;
	savedCart?: savedCart;
	pastOrders?: pastOrders;
}

export interface userLoggedIn {
	loggedIn: boolean;
	userData?: user;
}

export interface users {
	[key: string]: user;
}
