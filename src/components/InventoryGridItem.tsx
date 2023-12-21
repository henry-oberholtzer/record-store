import PropTypes from 'prop-types';
import { InventoryGridItemProps } from '../Types';
import './css/InventoryGridItem.css';
import { PageDirectory, changePage } from '../redux/slices/interfaceSlice';
import { useAppDispatch } from './hooks/hooks';

const InventoryGridItem = (props: InventoryGridItemProps) => {
	const dispatch = useAppDispatch();
	const i = props.item;
	return (
		<div
			className={i.stock < 1 ? 'invGridItem outOfStock' : 'invGridItem'}
			key={i.key}
			onClick={() => {
				dispatch(
					changePage({
						pageReq: PageDirectory.ItemDetailsPage,
						itemReq: i.key,
					})
				);
			}}>
			<img
				src={i.imageURL}
				alt={i.title}
			/>
			<div id="prodinf">
				<div id="abt">
					<h5
						className="title"
						title={i.artist}>
						{i.artist}
					</h5>
					<h4
						className="title"
						title={i.title}>
						{i.title}
					</h4>
				</div>
				<div id="info">
					{i.stock < 1 ? (
						<h5>
							{i.type} | ${i.retailPrice} Out Of Stock
						</h5>
					) : (
						<h5>
							{i.type} | ${i.retailPrice}
						</h5>
					)}
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
};

export default InventoryGridItem;
