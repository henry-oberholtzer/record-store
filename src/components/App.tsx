import { useState } from 'react'
import Header from './Header'
import './App.css'
import { inventoryItem } from './interfaces';
import savedInventory from '../data/inventory';

function App() {
  const [pageView, setPageView] = useState<number>(0)
  const [inventory, setInventory] = useState<inventoryItem[]>(savedInventory)
  const [editItem, setEditItem] = useState<inventoryItem[]>()
  let currentView;

  if (pageView === 0) {
    currentView =
    <InventoryGrid
      inventory={inventory}
    />
  } else if (pageView === 1) {
    <InventoryForm
      buttonText="Add to Inventory"
    />
  } else if (pageView === 2 && editItem) {
    <InventoryForm
      buttonText="Finish Editing Item & Update Inventory"
      defaultValues={editItem}
    />
  }

  return (
    <>
    <Header 
      storeTitle="Henry's Record Store"
      setPageView={setPageView}
      viewInventory={0}
      viewNewItem={1}
    />
    {currentView}
    </>
  )
}

export default App
