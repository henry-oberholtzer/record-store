import { inventoryItem } from "../components/interfaces";
import { v4 } from "uuid";

const savedInventory: inventoryItem[] = [{
    artist: "Freaky Chakra",
    title: "Halucifuge",
    recordLabel: "Exist Dance",
    catalogNumber: "ED 010",
    released: "1993",
    genres: ["Breakbeat", "Trance", "Techno", "Downtempo"],
    description: "A1: Halucifuge (Blind Dive)\nA2: Halucifuge (300 Mic)\nB1: Halucifuge (Freaky Chicken Peck)\nB2: Transcendental Funk Bump",
    type: '12"',
    imageURL: "https://i.discogs.com/oA3PIqWW4LrIvZFdSGteZHYwXTW7Ttw3-HjRWYeOFOM/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDI4/LTE1ODQ0OTU4MzUt/NjE2OS5qcGVn.jpeg",
    stock: 50,
    retailPrice: 12,
    cost: 8,
    key: v4(),
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
    imageURL: "https://i.discogs.com/Us8js2Lybaf48iqQezNuzUNu5B54CM9epd4xkBOpORA/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNzcy/LTAwMS5qcGc.jpeg",
    stock: 50,
    retailPrice: 12,
    cost: 8,
    key: v4(),
}]

export default savedInventory;