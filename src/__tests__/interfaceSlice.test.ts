import { expect, test, describe } from "vitest";
import reducer, {
	changePage,
	initialState,
} from "./../redux/slices/interfaceSlice";

describe("interfaceSlice", () => {
	test("Should return initial state when called with no change", () => {
		expect(reducer(initialState, { type: "" })).toEqual(initialState);
	});
});
