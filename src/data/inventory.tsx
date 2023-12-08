import { inventoryItem } from "../components/interfaces";
import { v4 } from "uuid";

const savedInventory: inventoryItem[] = [{
    artist: "Freaky Chakra",
    title: "Halucifuge",
    recordLabel: "Exist Dance",
    catalognumber: "ED 010",
    released: "1993",
    description: "A1: Halucifuge (Blind Dive) A2: Halucifuge (300 Mic) B1: Halucifuge (Freaky Chicken Peck) B2: Transcendental Funk Bump",
    type: '12"',
    imageURL: "https://i.discogs.com/oA3PIqWW4LrIvZFdSGteZHYwXTW7Ttw3-HjRWYeOFOM/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDI4/LTE1ODQ0OTU4MzUt/NjE2OS5qcGVn.jpeg",
    stock: 50,
    retailprice: 12,
    cost: 8,
    key: v4(),
}]

export default savedInventory;