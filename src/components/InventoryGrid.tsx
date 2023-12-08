import PropTypes from 'prop-types';
import { inventoryItem } from './interfaces';
import InventoryGridItem from './InventoryGridItem';

const InventoryGrid = (props: InventoryGrid) => {
  return (
    <>
    {props.inventory.map(item => {
      return(
        <div key={item.key}>
          <InventoryGridItem
            item={item}
            setViewItem={props.setViewItem}
            setPageView={props.setPageView}
            pageItemDetails={props.pageItemDetails}
          />
        </div>
      )
    })}
    </>
  )
}

InventoryGrid.propTypes = {
  inventory: PropTypes.array,
  setPageView: PropTypes.func,
  pageItemDetails: PropTypes.number,
  setViewItem: PropTypes.func,
}

interface InventoryGrid {
  inventory: inventoryItem[],
  setPageView: (arg1: number) => void;
  pageItemDetails: number,
  setViewItem: (arg1: string) => void;
}

export default InventoryGrid;