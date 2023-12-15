import { expect, test, describe } from "vitest";
import reducer, {
	add,
	remove,
	initialState,
} from "./../redux/slices/inventorySlice";

describe("inventorySlice", () => {
	const testInventory = {
		aaaa: {
			artist: "Freaky Chakra",
			title: "Halucifuge",
			recordLabel: "Exist Dance",
			catalogNumber: "ED 010",
			released: "1993",
			genres: ["Breakbeat", "Trance", "Techno", "Downtempo"],
			description:
				"A1: Halucifuge (Blind Dive)\nA2: Halucifuge (300 Mic)\nB1: Halucifuge (Freaky Chicken Peck)\nB2: Transcendental Funk Bump",
			type: '12"',
			imageURL:
				"https://i.discogs.com/oA3PIqWW4LrIvZFdSGteZHYwXTW7Ttw3-HjRWYeOFOM/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDI4/LTE1ODQ0OTU4MzUt/NjE2OS5qcGVn.jpeg",
			stock: 50,
			retailPrice: 12,
			cost: 8,
			key: "aaaa",
			toDelete: false,
		},
	};

	const testItem = testInventory.aaaa;

	test("Should return the initial state when called without an action", () => {
		expect(reducer(initialState, { type: "" })).toEqual(initialState);
	});

	test("When given item data, should add to state", () => {
		expect(reducer(initialState, add(testInventory.aaaa))).toEqual(
			testInventory
		);
	});

	test("When given an item key to remove, should remove from inventory", () => {
		expect(reducer(testInventory, remove(testInventory.aaaa.key))).toEqual(
			initialState
		);
	});

	test("Add should also be able to modify items with the same key", () => {
		expect(
			reducer(testInventory, add({ ...testItem, artist: "Chakra Freaky" }))
		).toEqual({
			aaaa: { ...testItem, artist: "Chakra Freaky" },
		});
	});
});
