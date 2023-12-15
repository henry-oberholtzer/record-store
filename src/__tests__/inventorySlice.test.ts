import { expect, test, describe } from "vitest";
import inventorySlice, { initialState } from "../redux/slices/inventorySlice";

describe("inventorySlice", () => {
	test("Should return the initial state when called without an action", () => {
		const initInventorySlice = inventorySlice(initialState, { type: "" });
		expect(initInventorySlice).toEqual(initialState);
	});
});
