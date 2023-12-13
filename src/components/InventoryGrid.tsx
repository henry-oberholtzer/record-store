import PropTypes from "prop-types";
import { InventoryGridProps } from "../Types";
import InventoryGridItem from "./InventoryGridItem";
import "./css/InventoryGrid.css";

const InventoryGrid = (props: InventoryGridProps) => {
	return (
		<div className="inventory-grid">
			{props.inventory.map((item) => {
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
	inventory: PropTypes.array,
	setPageView: PropTypes.func,
	pageItemDetails: PropTypes.number,
	setViewItem: PropTypes.func,
};

export default InventoryGrid;
