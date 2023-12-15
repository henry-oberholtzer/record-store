import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InventoryItem } from "../../Types";

export enum PageDirectory {
	InventoryPage,
	AddItemPage,
	EditItemPage,
	ItemDetailsPage,
}

interface InterfaceState {
	pageSelected: number;
	itemSelected: InventoryItem["key"];
}

export interface ChangePage {
	pageReq: number;
	itemReq?: string;
}

export const initialState: InterfaceState = {
	pageSelected: 0,
	itemSelected: "",
};

export const interfaceSlice = createSlice({
	name: "interface",
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<ChangePage>) => {
			state.pageSelected = action.payload.pageReq;
			if (action.payload.itemReq) {
				state.itemSelected = action.payload.itemReq;
			} else {
				state.itemSelected = "";
			}
		},
	},
});

export const { changePage } = interfaceSlice.actions;

export default interfaceSlice.reducer;
