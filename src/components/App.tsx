import Header from './Header'
import InventoryGrid from './InventoryGrid';
import InventoryItemDetails from './InventoryItemDetails';
import InventoryForm from './InventoryForm';
import usePageView from './hooks/usePageView';
import useInventory from './hooks/useInventory';


const App = () => {
  const {pageView, setPageView, viewItem, setViewItem } = usePageView()
  const {inventory, editItem, setEditItem, getItemFromInventory, itemAdjust} = useInventory()
  
  const pageInv = 0;
  const pageAddItem = 1;
  const pageEditItem = 2;
  const pageItemDetails = 3;

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
            itemAdjust={itemAdjust}
            setPageView={setPageView}
            returnPage={pageInv}
          />
        )
      } else if (pageView === pageEditItem && editItem) {
        return(
          <InventoryForm
            buttonText="Finish Editing Item & Update Inventory"
            itemToEdit={getItemFromInventory(editItem)}
            itemAdjust={itemAdjust}
            setPageView={setPageView}
            returnPage={pageItemDetails}
          />
        )
      } else if (pageView === pageItemDetails && viewItem) {
        return(
          <InventoryItemDetails
            item={getItemFromInventory(viewItem)}
            setPageView={setPageView}
            pageInv={pageInv}
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
