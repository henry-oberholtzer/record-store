import { useState } from "react";
import "./css/InventoryItemDetails.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { PageDirectory, itemSelected } from "../redux/slices/interfaceSlice";
import { add } from "../redux/slices/inventorySlice";
import { changePage } from "../redux/slices/interfaceSlice";
import { getItem } from "../redux/slices/inventorySlice";
const InventoryItemDetails = () => {
	const dispatch = useAppDispatch();
	const [inventoryAdjustNum, setInventoryAdjustNum] = useState<number>(-1);
	const currentItem = useAppSelector(itemSelected);
	const i = useAppSelector(getItem)[currentItem];
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
								<b>Label:&nbsp;</b> {i.recordLabel}
							</li>
							<li>
								<b>Catalog:&nbsp;</b> {i.catalogNumber}
							</li>
							<li>
								<b>Released:&nbsp;</b> {i.released}
							</li>
							<li>
								<b>Format:&nbsp;</b> {i.type}
							</li>
							<li>
								<b>Genres:&nbsp;</b> {i.genres.join(", ")}
							</li>
						</ul>
						<ul className="itemDetailsList">
							<li className="itemDetailsListTitle">
								<b>Product Info</b>
							</li>
							<li>
								<b>Retail:&nbsp;</b> ${i.retailPrice}
							</li>
							<li>
								<b>Unit Cost:&nbsp;</b> ${i.cost}
							</li>
							<li>
								<b>In Stock:&nbsp;</b>{" "}
								{i.stock > 0 ? `${i.stock}` : "Out Of Stock"}
							</li>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									const stock =
										i.stock + inventoryAdjustNum < 0
											? 0
											: i.stock + inventoryAdjustNum;
									if (stock !== i.stock) {
										dispatch(
											add({
												...i,
												stock,
											})
										);
									}
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
									<button className="invAdjustButton" type="submit">
										Adjust Stock
									</button>
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
					dispatch(
						changePage({ pageReq: PageDirectory.EditItemPage, itemReq: i.key })
					);
				}}>
				Edit This Item
			</button>
		</div>
	);
};

export default InventoryItemDetails;
