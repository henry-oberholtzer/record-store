import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { users, userDataPayload } from "../../userTypes";
import temporaryUsers from "../../data/temporaryUsers";

export const initialState: users = temporaryUsers;

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		createAccount: (state, action: PayloadAction<userDataPayload>) => {
			state[action.payload.key] = action.payload.user;
		},
		deleteAccount: (state, action: PayloadAction<userDataPayload>) => {
			delete state[action.payload.key];
		},
	},
});

export const { createAccount, deleteAccount } = usersSlice.actions;
export default usersSlice.reducer;

export const getAccount = (state: RootState) => state.users;
