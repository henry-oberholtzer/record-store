import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import {
	getLoggedIn,
	getUserData,
	unsetLocalUser,
} from "../redux/slices/localUserSlice";
import { formatDistanceToNow } from "date-fns";
import { changePage, PageDirectory } from "../redux/slices/interfaceSlice";

const UserInformation = () => {
	const user = useAppSelector(getUserData);
	const loggedIn = useAppSelector(getLoggedIn);
	const dispatch = useAppDispatch();
	const logOut = () => {
		dispatch(changePage({ pageReq: PageDirectory.LoginPage }));
		dispatch(unsetLocalUser());
	};

	const display = () => {
		if (loggedIn && user) {
			return (
				<>
					<p>{user.username}</p>
					<p>
						Last seen {formatDistanceToNow(user.lastSeen, { addSuffix: true })}
					</p>
					<button className="smallButton">My Account</button>
					<button className="smallButton" onClick={() => logOut()}>
						Log Out
					</button>
				</>
			);
		} else {
			return (
				<>
					<p>Not Logged In</p>
					<button className="smallButton">Register</button>
					<button
						onClick={() =>
							dispatch(changePage({ pageReq: PageDirectory.LoginPage }))
						}>
						Log In
					</button>
				</>
			);
		}
	};

	return <div className="UserInformationFrame">{display()}</div>;
};

export default UserInformation;
