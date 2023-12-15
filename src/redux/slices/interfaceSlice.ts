import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { interfaceState } from "../../Types";

export enum PageDirectory {
	InventoryPage,
	AddItemPage,
	EditItemPage,
	ItemDetailsPage,
}

export const initialState: interfaceState = {
	pageSelected: 0,
	itemSelected: "",
};

export interface ChangePage {
	pageRequested: number;
	itemRequested: string;
}

export const interfaceSlice = createSlice({
	name: "interface",
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<ChangePage>) => {
			state.pageSelected = action.payload.pageRequested;
			state.itemSelected = action.payload.itemRequested;
		},
	},
});
