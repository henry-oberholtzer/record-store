import PropTypes from "prop-types";
import { inventoryItem } from "./interfaces";

const InventoryGridItem = (props: InventoryGridItem) => {
  const i = props.item;
  return (
    <div
      key={i.key}
      onClick={() => {
        props.setPageView(props.pageItemDetails);
        props.setViewItem(i.key);
      }}>
      <img src={i.imageURL} alt={i.title} />
      <h4>
        {i.artist} - {i.title} | {i.type}
      </h4>
      <h5>${i.retailPrice}</h5>
      <p>
        {i.recordLabel} - {i.released}
      </p>
    </div>
  );
};

InventoryGridItem.propTypes = {
  item: PropTypes.object,
  setPageView: PropTypes.func,
  pageItemDetails: PropTypes.number,
  setViewItem: PropTypes.func,
};

interface InventoryGridItem {
  item: inventoryItem;
  setPageView: (arg1: number) => void;
  pageItemDetails: number;
  setViewItem: (arg1: string) => void;
}

export default InventoryGridItem;
