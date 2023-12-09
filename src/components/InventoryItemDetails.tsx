import PropTypes from "prop-types";
import { inventoryItem } from "./interfaces";
import { useState } from "react";
import "./InventoryItemDetails.css";

const InventoryItemDetails = (props: props) => {
  const [inventoryAdjustNum, setInventoryAdjustNum] = useState<number>(-1);
  const i = props.item;
  return (
    <div className="itemDetails">
      <div className="itemDetailsTop">
        <img className="itemDetailsImage" src={i.imageURL} alt={i.title} />
        <div className="itemDetailsSideInfo">
          <h3 className="itemDetailsTitle">
            {i.artist} - {i.title}
          </h3>
          <div>
            <ul className="itemDetailsList">
              <li className="itemDetailsListTitle">
                <b>Release Info</b>
              </li>
              <li>
                <b>Label:</b> {i.recordLabel}
              </li>
              <li>
                <b>Catalog:</b> {i.catalogNumber}
              </li>
              <li>
                <b>Released:</b> {i.released}
              </li>
              <li>
                <b>Format:</b> {i.type}
              </li>
              <li>
                <b>Genres:</b> {i.genres.join(", ")}
              </li>
            </ul>
            <ul className="itemDetailsList">
              <li className="itemDetailsListTitle">
                <b>Product Info</b>
              </li>
              <li>
                <b>Retail:</b> ${i.retailPrice}
              </li>
              <li>
                <b>Unit Cost:</b> ${i.cost}
              </li>
              <li>
                <b>In Stock:</b> {i.stock > 0 ? `${i.stock}` : "Out Of Stock"}
              </li>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const stock = i.stock + inventoryAdjustNum;
                  props.itemAdjust({
                    ...i,
                    stock,
                  });
                }}>
                <li className="invAdjLi">
                  <label className="hidden" htmlFor="inventoryAdjust">
                    <b>Adjust Stock: </b>
                  </label>
                  <input
                    id="inventoryAdjust"
                    value={inventoryAdjustNum}
                    type="number"
                    onChange={(e) =>
                      setInventoryAdjustNum(parseInt(e.target.value))
                    }></input>
                  <button className="invAdjustButton" type="submit">Adjust Stock</button>
                </li>
              </form>
            </ul>
          </div>
        </div>
      </div>
      <div className="itemDetailsDescription">
        <p>{i.description}</p>
      </div>
      <hr />
      <button
        onClick={() => {
          props.setEditItem(i.key);
          props.setPageView(props.pageEditItem);
        }}>
        Edit This Item
      </button>
      <button
        onClick={() => {
          const toDelete = true;
          props.itemAdjust({
            ...i,
            toDelete,
          });
          props.setPageView(props.pageInv);
        }}>
        Delete This Item
      </button>
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
