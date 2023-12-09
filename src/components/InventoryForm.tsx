import { useState } from "react";
import PropTypes from "prop-types";
import { inventoryItem } from "./interfaces";
import { emptyItem } from "../data/savedInventory";
import "./InventoryItemDetails.css";

const InventoryForm = (props: props) => {
  const [item, setItem] = useState<inventoryItem>(props.itemToEdit ? props.itemToEdit : {...emptyItem})

  const checkItemValues = (invItem: inventoryItem) => {
    const itemKeys = Object.keys(item);
    for (let i = 0; i < itemKeys.length; i++) {
      const param = invItem[itemKeys[i] as keyof inventoryItem];
      if (param === "") {
        window.alert(`Please fill out the ${itemKeys[i]} field`);
        return false;
      }
    }
    return true;
  };

  return (
    <div className="itemDetails">
      <div className="itemDetailsTop">
        <div>
          <img className="itemDetailsImage" src={item.imageURL} alt="User Provided Image" />
          <label className="hidden">Image URL: </label>
          <input
            onChange={(e) =>
              setItem({
                ...item,
                imageURL: e.target.value,
              })
            }
            type="text"
            placeholder="Image URL"
            value={item.imageURL}></input>
        </div>
        <div className="itemDetailsSideInfo">
          <div className="itemDetailsTitle">
            <label className="hidden">Artist: </label>
            <input
              onChange={(e) =>
                setItem({
                  ...item,
                  artist: e.target.value,
                })
              }
              type="text"
              placeholder="Artist"
              value={item.artist}></input>
            <label className="hidden">Title: </label>
            <input
              onChange={(e) =>
                setItem({
                  ...item,
                  title: e.target.value,
                })
              }
              type="text"
              placeholder="Title"
              value={item.title}></input>
          </div>
          <div>
            <ul className="itemDetailsList">
              <li className="itemDetailsListTitle">
                <b>Release Info</b>
              </li>
              <li>
                <label className="">Label:</label>
                <input
                  onChange={(e) =>
                    setItem({
                      ...item,
                      recordLabel: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Label"
                  value={item.recordLabel}></input>
              </li>
              <li>
                <label className="">Catalog: </label>
                <input
                  onChange={(e) =>
                    setItem({
                      ...item,
                      catalogNumber: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="e.g. XYZ###"
                  value={item.catalogNumber}></input>
              </li>
              <li>
                <label className="">Released: </label>
                <input
                  onChange={(e) =>
                    setItem({
                      ...item,
                      released: e.target.value,
                    })
                  }
                  type="number"
                  maxLength={4}
                  placeholder="YYYY"
                  value={item.released}></input>
              </li>
              <li>
                <label className="">Format: </label>
                <select
                  onChange={(e) =>
                    setItem({
                      ...item,
                      type: e.target.value,
                    })
                  }>
                  <option value={'12"'}>12"</option>
                  <option value={'2x12"'}>2x12"</option>
                  <option value={'2x12"'}>3x12"</option>
                  <option value="CD">CD</option>
                </select>
              </li>
              <li>
                <label className="">Genres: </label>
                <input
                  onChange={(e) =>
                    setItem({
                      ...item,
                      genres: e.target.value.split(", "),
                    })
                  }
                  type="text"
                  placeholder="seperated, by, commas"
                  value={item.genres.join(", ")}></input>
              </li>
            </ul>
            <ul className="itemDetailsList">
              <li className="itemDetailsListTitle">
                <b>Product Info</b>
              </li>
              <li>
                <label className="">Retail: </label>
                <input
                  onChange={(e) =>
                    setItem({
                      ...item,
                      retailPrice: parseInt(e.target.value),
                    })
                  }
                  type="number"
                  value={item.retailPrice}></input>
              </li>
              <li>
                <label className="">Unit Cost: </label>
                <input
                  onChange={(e) =>
                    setItem({
                      ...item,
                      cost: parseInt(e.target.value),
                    })
                  }
                  type="number"
                  value={item.cost}></input>
              </li>
              <li>
                <label>In Stock: </label>
                <input
                  onChange={(e) =>
                    setItem({
                      ...item,
                      stock: parseInt(e.target.value),
                    })
                  }
                  type="number"
                  value={item.stock}></input>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="itemDetailsPrice">
        <div></div>
        <div></div>
      </div>
      <div className="itemDetailsDescription">
        <label className="">Description: </label>
        <textarea
          onChange={(e) =>
            setItem({
              ...item,
              description: e.target.value,
            })
          }
          value={item.description}></textarea>
      </div>
      <hr />
      <button
        onClick={() => {
          if (checkItemValues(item)) {
            props.itemAdjust(item);
            props.setPageView(props.returnPage);
          }
        }}>
        {props.buttonText}
      </button>
    </div>
  );
};

InventoryForm.propTypes = {
  buttonText: PropTypes.string,
  itemToEdit: PropTypes.object,
  itemAdjust: PropTypes.func,
  setPageView: PropTypes.func,
  returnPage: PropTypes.number,
};

interface props {
  buttonText: string;
  itemToEdit?: inventoryItem;
  itemAdjust: (arg1: inventoryItem) => void;
  setPageView: (arg1: number) => void;
  returnPage: number;
}

export default InventoryForm;
