import PropTypes from 'prop-types';

const Header = (props: headerProps) => {
    return (
        <>
        <h1>{props.storeTitle}</h1>
        <hr />
        <button onClick={()=> props.setPageView(props.viewInventory)}>View Inventory</button>
        <button onClick={()=> props.setPageView(props.viewNewItem)}>Add New Item</button>
        <hr />
        </>
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