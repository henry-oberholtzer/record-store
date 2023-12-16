import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { user, userLoggedIn } from "../../userTypes";

export const initialState: userLoggedIn = {
	loggedIn: false,
};

export const localUserSlice = createSlice({
	name: "localUser",
	initialState,
	reducers: {
		setLocalUser: (state, action: PayloadAction<user>) => {
			state.loggedIn = true;
			state.userData = action.payload;
			console.log("hiya");
		},
		unsetLocalUser: (state) => {
			delete state.userData;
			state.loggedIn = false;
		},
	},
});

export const { setLocalUser, unsetLocalUser } = localUserSlice.actions;

export const getUserData = (state: RootState) => state.localUser.userData;

export const getLoggedIn = (state: RootState) => state.localUser.loggedIn;

export default localUserSlice.reducer;
