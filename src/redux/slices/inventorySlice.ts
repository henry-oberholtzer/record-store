import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Inventory, InventoryItem } from "../../Types";

export const initialState: Inventory = {};

export const inventorySlice = createSlice({
	name: "inventory",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<InventoryItem>) => {
			state[action.payload.key] = action.payload;
		},
	},
});

export const { add } = inventorySlice.actions;

export default inventorySlice.reducer;
