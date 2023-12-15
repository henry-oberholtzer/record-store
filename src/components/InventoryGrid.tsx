import PropTypes from "prop-types";
import { InventoryGridProps, invKey } from "../Types";
import InventoryGridItem from "./InventoryGridItem";
import "./css/InventoryGrid.css";
import { useAppSelector } from "./hooks/hooks";

const InventoryGrid = (props: InventoryGridProps) => {
	const inventory = useAppSelector((state) => state.inventory);
	return (
		<div className="inventory-grid">
			{Object.keys(inventory).map((key: invKey) => {
				const item = inventory[key];
				return (
					<div key={item.key}>
						<InventoryGridItem
							item={item}
							setViewItem={props.setViewItem}
							setPageView={props.setPageView}
							pageItemDetails={props.pageItemDetails}
						/>
					</div>
				);
			})}
		</div>
	);
};

InventoryGrid.propTypes = {
	setPageView: PropTypes.func,
	pageItemDetails: PropTypes.number,
	setViewItem: PropTypes.func,
};

export default InventoryGrid;
