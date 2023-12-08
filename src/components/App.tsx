import { useState } from 'react'
import Header from './Header'
import { inventoryItem } from './interfaces';
import savedInventory from '../data/savedInventory';
import InventoryGrid from './InventoryGrid';
import InventoryItemDetails from './InventoryItemDetails';

function App() {
  const [pageView, setPageView] = useState<number>(0)
  const [inventory, setInventory] = useState<inventoryItem[]>(savedInventory)
  const [viewItem, setViewItem] = useState<inventoryItem["key"]>()
  const [editItem, setEditItem] = useState<inventoryItem["key"]>()
  
  const pageInv = 0;
  const pageAddItem = 1;
  const pageEditItem = 2;
  const pageItemDetails = 3;

  const getItemFromInventory = (searchKey: inventoryItem["key"]) => {
    return inventory.filter(el => el.key === searchKey)[0]
  }
  
  const itemAdjust = (item: inventoryItem) => {
    if (getItemFromInventory(item.key)) {
      setInventory(
        inventory.map((i) => i.key === item.key ? item : i)
      )
    } else {
      setInventory(
        [...inventory, item]
        )
    }
    // check if item exists by key in inventory,
      // if item does not exist, add to inventory,
      // if item does exist, replace with the newly recieved item
  }

  const currentView = () => {
      if (pageView === pageInv) {
        return(
          <InventoryGrid
            inventory={inventory}
            setPageView={setPageView}
            pageItemDetails={pageItemDetails}
            setViewItem={setViewItem}
          />
        )
      } else if (pageView === pageAddItem) {
        return(
          <InventoryForm
            buttonText="Add to Inventory"
            itemToEdit={false}
          />
        )
      } else if (pageView === pageEditItem && editItem) {
        return(
          <InventoryForm
            buttonText="Finish Editing Item & Update Inventory"
            itemToEdit={getItemFromInventory(editItem)}
          />
        )
      } else if (pageView === pageItemDetails && viewItem) {
        return(
          <InventoryItemDetails
            item={getItemFromInventory(viewItem)}
            setPageView={setPageView}
            pageEditItem={pageEditItem}
            setEditItem={setEditItem}
            itemAdjust={itemAdjust}
          />
        )
      }
  };

  return (
    <>
    <Header 
      storeTitle="Henry's Record Store"
      setPageView={setPageView}
      viewInventory={pageInv}
      viewNewItem={pageAddItem}
    />
    {currentView()}
    </>
  )
}

export default App
