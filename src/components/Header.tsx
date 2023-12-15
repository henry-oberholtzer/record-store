import "./css/Header.css";
import { PageDirectory } from "../redux/slices/interfaceSlice";
import { useAppDispatch } from "./hooks/hooks";
import { changePage } from "../redux/slices/interfaceSlice";

const Header = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="header">
			<h1>Rhythm Emporium</h1>
			<hr />
			<button
				onClick={() =>
					dispatch(changePage({ pageReq: PageDirectory.InventoryPage }))
				}>
				View Inventory
			</button>
			<button
				onClick={() =>
					dispatch(changePage({ pageReq: PageDirectory.InventoryPage }))
				}>
				Add New Item
			</button>
			<hr />
		</div>
	);
};

export default Header;
