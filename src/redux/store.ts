import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventorySlice";
import interfaceSlice from "./slices/interfaceSlice";
import usersSlice from "./slices/usersSlice";
import localUserSlice from "./slices/localUserSlice";

export const store = configureStore({
	reducer: {
		inventory: inventorySlice,
		interface: interfaceSlice,
		users: usersSlice,
		localUser: localUserSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
