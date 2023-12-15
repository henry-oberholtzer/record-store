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
	[id: string]: InventoryItem;
}

export interface HeaderProps {
	storeTitle: string;
	setPageView: (arg1: number) => void;
	viewInventory: number;
	viewNewItem: number;
}

export interface InventoryFormProps {
	buttonText: string;
	itemToEdit?: InventoryItem;
	itemAdjust: (arg1: InventoryItem) => void;
	setPageView: (arg1: number) => void;
	returnPage: number;
}

export interface InventoryGridProps {
	inventory: InventoryItem[];
	setPageView: (arg1: number) => void;
	pageItemDetails: number;
	setViewItem: (arg1: string) => void;
}

export interface InventoryGridItemProps {
	item: InventoryItem;
	setPageView: (arg1: number) => void;
	pageItemDetails: number;
	setViewItem: (arg1: string) => void;
}

export interface InventoryItemDetailsProps {
	item: InventoryItem;
	setPageView: (arg1: number) => void;
	pageEditItem: number;
	pageInv: number;
	setEditItem: (arg1: string) => void;
	itemAdjust: (arg1: InventoryItem) => void;
}
