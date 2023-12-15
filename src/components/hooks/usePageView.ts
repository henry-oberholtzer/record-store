import { useState } from "react";
import { InventoryItem } from "../../Types";

const usePageView = () => {
	const [pageView, setPageView] = useState<number>(0);
	const [viewItem, setViewItem] = useState<InventoryItem["key"]>();

	const pageInv = 0;
	const pageAddItem = 1;
	const pageEditItem = 2;
	const pageItemDetails = 3;

	return {
		pageView,
		setPageView,
		viewItem,
		setViewItem,
		pageInv,
		pageAddItem,
		pageEditItem,
		pageItemDetails,
	};
};

export default usePageView;
