# Inventory-Tracker

A React web application written in Typescript & built using Vite

By Henry Oberholtzer

## Technologies Used

*   React
*   TypeScript
*   JavaScript
*   Vite
*   Webpack

## Description

### User Stories
*   See all inventory listed
*   See specifications of inventory and properties of the product
*   Access a new form to add a product to the inventory
*   View details of a product by clicking on it
*   View details of product in inventory
*   Be able to decrease the amount in inventory by clicking a button
*   PropTypes should be used for all properties

### Component Tree

```md
App
├── Header
│   │   - View InventoryGrid
│   │   - View InventoryForm (to add new items)
├── InventoryGrid
│   ├── InventoryGridItem [iterated as needed]
│   │   - On click, view InventoryItemDetails rendered according to the items ID
├── InventoryItemDetails
│   │   - Displays all relevant information to the item
│   │   - Deletes item from inventory
│   │   - View IventoryForm to edit item
├── InventoryForm
│   │   - Finish editing / creating item
```

## Setup/Installation Requirements

* Download the repository using `git clone https://github.com/henry-oberholtzer/iventory-tracker.git` in terminal or downloading the ZIP folder from github
* Run `npm install` in the root folder
* To view the application on a dev server, run `npm dev`

## Known Bugs

*   When navigating to "Edit Item" and clicking on "Add New Item" form information is retained

## License

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) (c) 2023
Code licensed under GNU GPLv3