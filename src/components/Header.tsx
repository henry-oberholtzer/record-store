import PropTypes from "prop-types";
import { HeaderProps } from "../Types";
import "./css/Header.css";

const Header = (props: HeaderProps) => {
	return (
		<div className="header">
			<h1>{props.storeTitle}</h1>
			<hr />
			<button onClick={() => props.setPageView(props.viewInventory)}>
				View Inventory
			</button>
			<button onClick={() => props.setPageView(props.viewNewItem)}>
				Add New Item
			</button>
			<hr />
		</div>
	);
};

Header.propTypes = {
	storeTitle: PropTypes.string,
	setPageView: PropTypes.func,
	viewInventory: PropTypes.number,
	viewNewItem: PropTypes.number,
};

export default Header;
