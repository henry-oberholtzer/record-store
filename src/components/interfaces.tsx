export interface inventoryItem {
    artist: string,
    title: string,
    recordLabel: string,
    catalognumber: string,
    released: string,
    description: string,
    type: '12"' | 'CD' | '2x12"' | '3xLP'
    imageURL: string,
    stock: number,
    retailprice: number,
    cost: number,
    key: string,
}