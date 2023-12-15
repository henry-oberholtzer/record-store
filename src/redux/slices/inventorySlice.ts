import { createSlice } from "@reduxjs/toolkit";
import { Inventory } from "../../Types";

export const initialState: Inventory = {};

export const inventorySlice = createSlice({
	name: "inventory",
	initialState,
	reducers: {},
});

export default inventorySlice.reducer;
