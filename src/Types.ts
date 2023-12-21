export interface InventoryItem {
	artist: string;
	title: string;
	recordLabel: string;
	catalogNumber: string;
	released: string;
	genres: string[];
	description: string;
	type: string;
	imageURL: string;
	stock: number;
	retailPrice: number;
	cost: number;
	key: string;
}

export interface Inventory {
	[key: string]: InventoryItem;
}

export type invKey = keyof Inventory;

export interface InventoryFormProps {
	buttonText: string;
}

export interface InventoryGridItemProps {
	item: InventoryItem;
}
