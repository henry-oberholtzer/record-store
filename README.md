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
│   ├── UIControlButton [x3]
│   │   - View InventoryGrid
│   │   - View InventoryForm (to add new items)
├── InventoryGrid
│   ├── InventoryGridItem [iterated as needed]
│   │   - On click, view InventoryItemDetails rendered according to the items ID
├── InventoryItemDetails
│   │   - Displays all relevant information to the item
│   ├── UIControlButton
│   │   - Deletes item from inventory
│   ├── UIControlButton
│   │   - View IventoryForm to edit item
├── InventoryForm
│   ├── UIControlButton
│   │   - Finish editing / creating item
```

## Setup/Installation Requirements

* Download the repository using `git clone https://github.com/henry-oberholtzer/iventory-tracker.git` in terminal or downloading the ZIP folder from github
* Run `npm install` in the root folder
* To view the application on a dev server, run `npm dev`

## Known Bugs

*   No known bugs at the time of publication, please contact me if any arise.

## License

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) (c) 2023
Code licensed under GNU GPLv3