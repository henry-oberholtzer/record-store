import { invKey } from '../Types';
import InventoryGridItem from './InventoryGridItem';
import './css/InventoryGrid.css';
import { useAppSelector } from './hooks/hooks';

const InventoryGrid = () => {
	const inventory = useAppSelector((state) => state.inventory);

	return (
		<div className="inventory-grid">
			{Object.keys(inventory).map((key: invKey) => {
				const item = inventory[key];
				return (
					<div key={item.key}>
						<InventoryGridItem item={item} />
					</div>
				);
			})}
		</div>
	);
};

export default InventoryGrid;
