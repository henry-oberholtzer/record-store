import Header from "./Header";
import InventoryGrid from "./InventoryGrid";
import InventoryItemDetails from "./InventoryItemDetails";
import InventoryForm from "./InventoryForm";
import usePageView from "./hooks/usePageView";
import useInventory from "./hooks/useInventory";

const App = () => {
	const { pageView, setPageView, viewItem, setViewItem } = usePageView();
	const { editItem, setEditItem, getItemFromInventory, itemAdjust } =
		useInventory();

	enum PageViews {
		InventoryPage,
		AddItemPage,
		EditItemPage,
		ItemDetailsPage,
	}

	const currentView = () => {
		if (pageView === PageViews.InventoryPage) {
			return (
				<InventoryGrid
					setPageView={setPageView}
					pageItemDetails={PageViews.InventoryPage}
					setViewItem={setViewItem}
				/>
			);
		} else if (pageView === PageViews.AddItemPage) {
			return (
				<InventoryForm
					buttonText="Add to Inventory"
					itemAdjust={itemAdjust}
					setPageView={setPageView}
					returnPage={PageViews.InventoryPage}
				/>
			);
		} else if (pageView === PageViews.EditItemPage && editItem) {
			return (
				<InventoryForm
					buttonText="Finish Editing Item & Update Inventory"
					itemToEdit={getItemFromInventory(editItem)}
					itemAdjust={itemAdjust}
					setPageView={setPageView}
					returnPage={PageViews.ItemDetailsPage}
				/>
			);
		} else if (pageView === PageViews.ItemDetailsPage && viewItem) {
			return (
				<InventoryItemDetails
					item={getItemFromInventory(viewItem)}
					setPageView={setPageView}
					pageInv={PageViews.InventoryPage}
					pageEditItem={PageViews.ItemDetailsPage}
					setEditItem={setEditItem}
					itemAdjust={itemAdjust}
				/>
			);
		}
	};

	return (
		<>
			<Header
				storeTitle="Henry's Record Store"
				setPageView={setPageView}
				viewInventory={PageViews.InventoryPage}
				viewNewItem={PageViews.AddItemPage}
			/>
			{currentView()}
		</>
	);
};

export default App;
