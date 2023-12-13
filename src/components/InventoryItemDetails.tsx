import PropTypes from "prop-types";
import { InventoryItemDetailsProps } from "../Types";
import { useState } from "react";
import "./css/InventoryItemDetails.css";

const InventoryItemDetails = (props: InventoryItemDetailsProps) => {
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

export default InventoryItemDetails;
