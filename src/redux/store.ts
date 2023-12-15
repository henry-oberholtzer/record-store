import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventorySlice";
import interfaceSlice from "./slices/interfaceSlice";

export const store = configureStore({
	reducer: {
		inventory: inventorySlice,
		interface: interfaceSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
