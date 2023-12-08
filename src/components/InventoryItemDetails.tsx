import PropTypes from "prop-types";
import { inventoryItem } from "./interfaces";
import { useState } from "react";

const InventoryItemDetails = (props: props) => {
  const [inventoryAdjustNum, setInventoryAdjustNum] = useState<number>(0);
  const i = props.item;
  return (
    <div>
      <img src={i.imageURL} alt={i.title} />
      <div>
        <tr>
          <h3>
            {i.artist} - {i.title}
          </h3>
        </tr>
        <tr>
          <ul>
            <li>Label: {i.recordLabel}</li>
            <li>Catalog: {i.catalogNumber}</li>
            <li>Released: {i.released}</li>
            <li>Format: {i.type}</li>
            <li>Genres: {i.genres.join(", ")}</li>
          </ul>
        </tr>
        <tr>
          <td>
            <p>Retail Price: ${i.retailPrice}</p>
          </td>
          <td>
            <p>Cost: ${i.cost}</p>
          </td>
        </tr>
        <tr>
          <td>{i.stock > 0 ? <p>Stock: {i.stock}</p> : <p>Out Of Stock</p>}</td>
          <td>
            <form
              onSubmit={(e) => {
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
          </td>
        </tr>
        <p>{i.description}</p>
        <hr />
        <button onClick={() => {
					props.setPageView
				}}>Edit This Item</button>
        <button>Delete This Item</button>
      </div>
    </div>
  );
};

InventoryItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
  setPageView: PropTypes.func.isRequired,
  pageEditItem: PropTypes.number.isRequired,
  setEditItem: PropTypes.func.isRequired,
  itemAdjust: PropTypes.func.isRequired,
	itemDelete: PropTypes.func.isRequired,
};

interface props {
  item: inventoryItem;
  setPageView: (arg1: number) => void;
  pageEditItem: number;
	pageInv: number;
  setEditItem: (arg1: string) => void;
  itemAdjust: (arg1: inventoryItem) => void;
	itemDelete: (arg1: string) => void
}

export default InventoryItemDetails;
