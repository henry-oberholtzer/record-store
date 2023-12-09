import PropTypes from 'prop-types';
import './Header.css';

const Header = (props: headerProps) => {
    return (
        <div className="header">
        <h1>{props.storeTitle}</h1>
        <hr />
        <button onClick={()=> props.setPageView(props.viewInventory)}>View Inventory</button>
        <button onClick={()=> props.setPageView(props.viewNewItem)}>Add New Item</button>
        <hr />
        </div>
    )
}

interface headerProps {
    storeTitle: string,
    setPageView: (arg1: number) => void;
    viewInventory: number,
    viewNewItem: number,
}

Header.propTypes = {
    storeTitle: PropTypes.string,
    setPageView: PropTypes.func,
    viewInventory: PropTypes.number,
    viewNewItem: PropTypes.number,
}

export default Header;