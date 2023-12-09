import PropTypes from "prop-types";
import { inventoryItem } from "./interfaces";
import "./InventoryGridItem.css";

const InventoryGridItem = (props: InventoryGridItem) => {
  const i = props.item;
  return (
    <div
      className={i.stock < 1 ? "invGridItem outOfStock" : "invGridItem"}
      key={i.key}
      onClick={() => {
        props.setPageView(props.pageItemDetails);
        props.setViewItem(i.key);
      }}>
      <img src={i.imageURL} alt={i.title} />
      <div id="prodinf">
        <div id="abt">
          <h5 className="title" title={i.artist}>{i.artist}</h5>
          <h4 className="title"  title={i.title}>{i.title}</h4>
        </div>
        <div id="info">
          {i.stock < 1 ? <h5>{i.type} | ${i.retailPrice} Out Of Stock</h5> : <h5>{i.type} | ${i.retailPrice}</h5>}
          <p id="labelyear">
            {i.recordLabel} - {i.released}
          </p>
        </div>
      </div>
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
