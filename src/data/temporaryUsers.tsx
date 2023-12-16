import { users } from "../userTypes";

const temporaryUsers: users = {
	//'PASSWORD' "hello"
	"aaf4c61d-dcc5-58a2-9abe-de0f3b482cd9": {
		username: "henry",
		memberSince: new Date(2015, 6, 27),
		lastSeen: new Date(2023, 6, 27),
		shippingAddress: {
			addressTo: "Henry Oberholtzer",
			streetName: "5555 Street Lane",
			city: "Mordor",
			country: "Middle Earth",
			state: "The Shire",
			zipCode: 900900,
			phoneNumber: "555-555-5555",
		},
	},
};

export default temporaryUsers;
