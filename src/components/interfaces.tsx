export interface inventoryItem {
    artist: string,
    title: string,
    recordLabel: string,
    catalogNumber: string,
    released: string,
    genres: string[], 
    description: string,
    type: '12"' | 'CD' | '2x12"' | '3xLP'
    imageURL: string,
    stock: number,
    retailPrice: number,
    cost: number,
    key: string,
}