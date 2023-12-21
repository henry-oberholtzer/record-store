import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { user, users } from '../../userTypes';
import temporaryUsers from '../../data/temporaryUsers';

export const initialState: users = temporaryUsers;

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		createAccount: (state, action: PayloadAction<user>) => {
			state[action.payload.key] = action.payload;
		},
		deleteAccount: (state, action: PayloadAction<user>) => {
			delete state[action.payload.key];
		},
	},
});

export const { createAccount, deleteAccount } = usersSlice.actions;
export default usersSlice.reducer;

export const getAccount = (state: RootState) => state.users;
