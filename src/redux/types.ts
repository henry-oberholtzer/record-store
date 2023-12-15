import { InventoryItem } from "../Types";

export const ADD = "ADD";

export interface InventoryAddAction {
	type: typeof ADD;
	payload: InventoryItem;
}
