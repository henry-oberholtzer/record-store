import PropTypes from "prop-types";
import { inventoryItem } from "./interfaces";
import { useState } from "react";

const InventoryItemDetails = (props: props) => {
  const [inventoryAdjustNum, setInventoryAdjustNum] = useState<number>(0);
  const i = props.item;
  return (
    <div className="itemDetails">
      <div className="itemDetailsImage">
        <img src={i.imageURL} alt={i.title} />
      </div>
    <div className="itemDetailsTitle">
      <h3>
        {i.artist} - {i.title}
      </h3>
    </div>
    <div className="itemDetailsInfo">
          <ul>
            <li>Label: {i.recordLabel}</li>
            <li>Catalog: {i.catalogNumber}</li>
            <li>Released: {i.released}</li>
            <li>Format: {i.type}</li>
            <li>Genres: {i.genres.join(", ")}</li>
          </ul>
    </div>
    <div className="itemDetailsPrice">
      <div>
        <p>Retail Price: ${i.retailPrice}</p>
      </div>
      <div>
        <p>Cost: ${i.cost}</p>
      </div>
    </div>
    <div className="itemDetailsStock">
      {i.stock > 0 ? <p>Stock: {i.stock}</p> : <p>Out Of Stock</p>}
    </div>
    <div className="itemDetailsStockAdjust">
      <form onSubmit={(e) => {
          e.preventDefault();
            const stock = i.stock + inventoryAdjustNum;
            props.itemAdjust({
              ...i,
              stock,
            });
      }}>
      <label htmlFor="inventoryAdjust">Adjust Inventory:</label>
      <input
        id="inventoryAdjust"
        value={inventoryAdjustNum}
        type="number"
        onChange={(e) =>
        setInventoryAdjustNum(parseInt(e.target.value))
        }></input>
      <button type="submit">Adjust</button>
      </form>
    </div>
    <div className="itemDetailsDescription">
        <p>{i.description}</p>
		</div>
    <hr />
        <button onClick={() => {
					props.setEditItem(i.key);
					props.setPageView(props.pageEditItem);
				}}>Edit This Item</button>
        <button onClick={() => {
					const toDelete = true;
					props.itemAdjust({
						...i,
						toDelete
					})
					props.setPageView(props.pageInv);
				}}>Delete This Item</button>
    </div>
  );
};

InventoryItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
  setPageView: PropTypes.func.isRequired,
  pageEditItem: PropTypes.number.isRequired,
  setEditItem: PropTypes.func.isRequired,
  itemAdjust: PropTypes.func.isRequired,
};

interface props {
  item: inventoryItem;
  setPageView: (arg1: number) => void;
  pageEditItem: number;
	pageInv: number;
  setEditItem: (arg1: string) => void;
  itemAdjust: (arg1: inventoryItem) => void;
}

export default InventoryItemDetails;
