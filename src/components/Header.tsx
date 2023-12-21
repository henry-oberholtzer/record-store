import './css/Header.css';
import { PageDirectory } from '../redux/slices/interfaceSlice';
import { useAppDispatch } from './hooks/hooks';
import { changePage } from '../redux/slices/interfaceSlice';
import UseInfoWidget from './UserInfoWidget';

const Header = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="header">
			<div className="headerUpper">
				<div></div>
				<h1>Rhythm Emporium</h1>
				<div>
					<UseInfoWidget />
				</div>
			</div>
			<hr />
			<button
				onClick={() =>
					dispatch(changePage({ pageReq: PageDirectory.InventoryPage }))
				}>
				View Inventory
			</button>
			<button
				onClick={() =>
					dispatch(changePage({ pageReq: PageDirectory.AddItemPage }))
				}>
				Add New Item
			</button>

			<hr />
		</div>
	);
};

export default Header;
