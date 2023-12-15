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
		remove: (state, action: PayloadAction<InventoryItem["key"]>) => {
			state;
			action.payload;
		},
	},
});

export const { add, remove } = inventorySlice.actions;

export default inventorySlice.reducer;
