import { inventoryItem } from "../components/interfaces";
import { v4 } from "uuid";

export const emptyItem: inventoryItem = {
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

export const savedInventory: inventoryItem[] = [
  {
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
    key: v4(),
    toDelete: false,
  },
  {
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
    key: v4(),
    toDelete: false,
  },
  {
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
    key: v4(),
    toDelete: false,
  },
];

export default savedInventory;
