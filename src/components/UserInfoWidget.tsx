import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import {
	getLoggedIn,
	getUserData,
	unsetLocalUser,
} from "../redux/slices/localUserSlice";
import { formatDistanceToNow } from "date-fns";
import { changePage, PageDirectory } from "../redux/slices/interfaceSlice";

const UseInfoWidget = () => {
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
					<p>Welcome back, {user.firstName}</p>
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
					<button
						className="smallButton"
						onClick={() =>
							dispatch(
								changePage({ pageReq: PageDirectory.AccountRegistrationPage })
							)
						}>
						Register
					</button>
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

	return <div className="UserInfoWidgetFrame">{display()}</div>;
};

export default UseInfoWidget;
