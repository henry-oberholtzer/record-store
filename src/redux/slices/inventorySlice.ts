import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Inventory, InventoryItem } from "../../Types";
import { RootState } from "../store";
import savedInventory from "../../data/savedInventory";

export const initialState: Inventory = savedInventory;

export const inventorySlice = createSlice({
	name: "inventory",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<InventoryItem>) => {
			state[action.payload.key] = action.payload;
		},
		remove: (state, action: PayloadAction<InventoryItem["key"]>) => {
			delete state[action.payload];
		},
	},
});

export const { add, remove } = inventorySlice.actions;

export const getItem = (state: RootState) => state.inventory;

export default inventorySlice.reducer;
