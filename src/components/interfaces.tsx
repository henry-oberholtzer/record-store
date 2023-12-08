export interface inventoryItem {
    artist: string,
    title: string,
    recordLabel: string,
    catalogNumber: string,
    released: string,
    genres: string[], 
    description: string,
    type: string,
    imageURL: string,
    stock: number,
    retailPrice: number,
    cost: number,
    key: string,
    toDelete: boolean,
}