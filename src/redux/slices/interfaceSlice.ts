import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InventoryItem } from "../../Types";
import { RootState } from "../store";

export enum PageDirectory {
	InventoryPage,
	AddItemPage,
	EditItemPage,
	ItemDetailsPage,
	LoginPage,
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

export const pageSelected = (state: RootState) => state.interface.pageSelected;
export const itemSelected = (state: RootState) => state.interface.itemSelected;

export default interfaceSlice.reducer;
