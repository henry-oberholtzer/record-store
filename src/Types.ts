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
	toDelete: boolean;
}

export interface Inventory {
	[key: string]: InventoryItem;
}

export type invKey = keyof Inventory;

export interface InventoryFormProps {
	buttonText: string;
}

export interface InventoryGridProps {
	setPageView: (arg1: number) => void;
	pageItemDetails: number;
	setViewItem: (arg1: string) => void;
}

export interface InventoryGridItemProps {
	item: InventoryItem;
	pageItemDetails: number;
}

export interface InventoryItemDetailsProps {
	item: InventoryItem;
	setPageView: (arg1: number) => void;
	pageEditItem: number;
	pageInv: number;
	setEditItem: (arg1: string) => void;
	itemAdjust: (arg1: InventoryItem) => void;
}
