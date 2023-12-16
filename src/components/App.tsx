import Header from "./Header";
import InventoryGrid from "./InventoryGrid";
import InventoryItemDetails from "./InventoryItemDetails";
import InventoryForm from "./InventoryForm";
import {
	PageDirectory,
	itemSelected,
	pageSelected,
} from "../redux/slices/interfaceSlice";
import { useAppSelector } from "./hooks/hooks";
import LoginPage from "./LoginPage";

const App = () => {
	const page = useAppSelector(pageSelected);
	const item = useAppSelector(itemSelected);

	const currentView = () => {
		if (page === PageDirectory.InventoryPage) {
			return <InventoryGrid />;
		} else if (page === PageDirectory.AddItemPage) {
			return <InventoryForm buttonText="Add to Inventory" />;
		} else if (page === PageDirectory.EditItemPage && item) {
			return (
				<InventoryForm buttonText="Finish Editing Item & Update Inventory" />
			);
		} else if (page === PageDirectory.ItemDetailsPage && item) {
			return <InventoryItemDetails />;
		} else if (page === PageDirectory.LoginPage) {
			return <LoginPage />;
		}
	};

	return (
		<>
			<Header />
			{currentView()}
		</>
	);
};

export default App;
