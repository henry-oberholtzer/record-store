import { expect, test, describe } from "vitest";
import reducer, {
	changePage,
	initialState,
} from "./../redux/slices/interfaceSlice";

describe("interfaceSlice", () => {
	test("Should return initial state when called with no change", () => {
		expect(reducer(initialState, { type: "" })).toEqual(initialState);
	});
	test("Should update the page selected when given a page number", () => {
		expect(reducer(initialState, changePage({ pageReq: 2 }))).toEqual({
			pageSelected: 2,
			itemSelected: "",
		});
	});
	test("Should update the item selected when given an item", () => {
		expect(
			reducer(initialState, changePage({ pageReq: 1, itemReq: "B" }))
		).toEqual({
			pageSelected: 1,
			itemSelected: "B",
		});
	});
	test("Should revert itemSelected to blank if not given an item key", () => {
		expect(
			reducer(
				{ itemSelected: "E", pageSelected: 2 },
				changePage({ pageReq: 0 })
			)
		).toEqual(initialState);
	});
});
