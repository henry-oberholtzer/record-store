import { Inventory, InventoryItem } from "../Types";
import { v4 } from "uuid";

export const emptyItem: InventoryItem = {
	artist: "",
	title: "",
	recordLabel: "",
	catalogNumber: "",
	released: "",
	genres: [],
	description: "",
	type: '12"',
	imageURL: "",
	stock: 0,
	retailPrice: 0,
	cost: 0,
	key: v4(),
	toDelete: false,
};

export const savedInventory: Inventory = {
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
	aaab: {
		artist: "Audio Pancake",
		title: "Meltdown To The Millenium / El Lado B Ataka Denveto",
		recordLabel: "Smitten",
		catalogNumber: "SMT 034",
		released: "1999",
		genres: ["Acid", "Techno"],
		description: "A: Meltdown To The Millenium\nB: El Lado B Ataka Denveto",
		type: '12"',
		imageURL:
			"https://i.discogs.com/Us8js2Lybaf48iqQezNuzUNu5B54CM9epd4xkBOpORA/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNzcy/LTAwMS5qcGc.jpeg",
		stock: 50,
		retailPrice: 12,
		cost: 8,
		key: "aaab",
		toDelete: false,
	},
	aaac: {
		artist: "Ticon",
		title: "Tekk, No / Ass-Tronaut",
		recordLabel: "TIP.World",
		catalogNumber: "tipw007",
		released: "2000",
		genres: ["Psy-Trance", "Trance"],
		description: "A: Tekk, No B: Ass-Tronaut",
		type: '12"',
		imageURL:
			"https://i.discogs.com/K3bN6klkGvr1XsrYKGkbVy2l1Q3Khm_jFwQ7wyBqbWA/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjQ1/NC0xMTE5ODM0Mzgy/LmpwZw.jpeg",
		stock: 50,
		retailPrice: 11,
		cost: 8,
		key: "aaac",
		toDelete: false,
	},
	aaad: {
		artist: "Blue Planet Corporation",
		title: "Micromega Remix EP",
		recordLabel: "Flying Rhino Records",
		catalogNumber: "AFR 031",
		released: "1999",
		genres: ["Trance", "Goa-Trance", "Psy-Trance"],
		description:
			"A: Micromega (Bumbling Loons Remix) B: Micromega (Choo-Choo Remix)",
		type: '12"',
		imageURL:
			"https://i.discogs.com/B53JNY519A3QThYm_tVY-9MhjueBWf0o-D-S0pxNZv8/rs:fit/g:sm/q:90/h:500/w:486/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0Mjcz/LTExMDU3MzQ3OTEu/anBn.jpeg",
		stock: 50,
		retailPrice: 12,
		cost: 10,
		key: "aaad",
		toDelete: false,
	},
	aaae: {
		artist: "Darshan",
		title: "Mind Merge /Ephemeral",
		recordLabel: "Flying Rhino Records",
		catalogNumber: "AFR 017",
		released: "1997",
		genres: ["Trance", "Goa-Trance"],
		description: "A: Mind Merge B: Ephemeral",
		type: '12"',
		imageURL:
			"https://i.discogs.com/3UDrA9R6nG8HGYtYVQ_w3h_0ZrV6fdeBWX-ajvnTPds/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1MzI4/LTEyMDExNzkzMzMu/anBlZw.jpeg",
		stock: 50,
		retailPrice: 12,
		cost: 8,
		key: "aaae",
		toDelete: false,
	},
	aaaf: {
		artist: "Unconscious Collective",
		title: "Flourostan E.P.",
		recordLabel: "Flying Rhino Records",
		catalogNumber: "AFR 009",
		released: "1996",
		genres: ["Trance", "Goa-Trance"],
		description: "A: Flourostani Transcendence AA: Synchronicity Converger",
		type: '12"',
		imageURL:
			"https://i.discogs.com/MccGZrlCIE_UlZ-6KiaukthhIsDOWtxi_VBaOf1JT5o/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzMjgx/LTEyMDExNjkxMjMu/anBlZw.jpeg",
		stock: 40,
		retailPrice: 12,
		cost: 10,
		key: "aaaf",
		toDelete: false,
	},
	aaag: {
		artist: "Various",
		title: "Birthday Bonanza E.P.",
		recordLabel: "Flying Rhino Records",
		catalogNumber: "AFR 050",
		released: "2000",
		genres: ["Trance", "Psy-Trance"],
		description:
			"A: Planet B.E.N. & James - Repeater B: Exile - Vertebrae C: Seeka - Thirst D: Bus - Finissimo",
		type: '2x12"',
		imageURL:
			"https://i.discogs.com/4GLdmPALYt3w8cy3V8_3bfLx5s4KBxZQ7PdfXtxcIas/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MzUw/My0xMjAxMjUyMzA1/LmpwZWc.jpeg",
		stock: 50,
		retailPrice: 20,
		cost: 10,
		key: "aaag",
		toDelete: false,
	},
	aaah: {
		artist: "ManMadeMan",
		title: "Desire EP",
		recordLabel: "Flying Rhino Records",
		catalogNumber: "AFR 040",
		released: "1999",
		genres: ["Trance", "Psy-Trance"],
		description: "A: Desire, B: Halt Production",
		type: '12"',
		imageURL:
			"https://i.discogs.com/UIU9aTdSRZXK9Zp-EQiQevpei8rfq62-56XHk-EXHX0/rs:fit/g:sm/q:90/h:553/w:557/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MDg3/Mi0xNjYyMzAyNzQ3/LTY4MDYuanBlZw.jpeg",
		stock: 60,
		retailPrice: 10,
		cost: 8,
		key: "aaah",
		toDelete: false,
	},
	aaai: {
		artist: "Slinky Wizard",
		title: "Jammy Mutants EP",
		recordLabel: "Flying Rhino Records",
		catalogNumber: "AFR 024",
		released: "1998",
		genres: ["Trance", "Goa-Trance"],
		description:
			"A: Slinky Wizard - Fridgefull Of Mutants (Remix) B: Jammy Wizard - AngstRom Dispidooshan",
		type: '12"',
		imageURL:
			"https://i.discogs.com/0sXnLvGWApfdOttggB_u39i_DQxkA5uQwOAxPxr3kXo/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzMjk5/LTEyMDEyMDQ0MTEu/anBlZw.jpeg",
		stock: 50,
		retailPrice: 10,
		cost: 9,
		key: "aaai",
		toDelete: false,
	},
	aaaj: {
		artist: "4D",
		title: "Active EP",
		recordLabel: "Flying Rhino Records",
		catalogNumber: "AFR 62",
		released: "2001",
		genres: ["Trance", "Progressive Trance", "Psy-Trance"],
		description: "A: Invader B: Active",
		type: '12"',
		imageURL:
			"https://i.discogs.com/-zGHVyMmQ35qiq4k3Nf7lnnuxFzm5BE0_FvmkU9_Oz8/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzg3/NC0xNTY5Nzc5MTY2/LTczNTEuanBlZw.jpeg",
		stock: 60,
		retailPrice: 11,
		cost: 9,
		key: "aaaj",
		toDelete: false,
	},
};

export default savedInventory;
