# Record Store

A React web application that utilizies Redux for state, written in Typescript & built using Vite

This project is a fork of [Inventory Tracker](https://github.com/henry-oberholtzer/inventory-tracker) and has been refactored to make use of Redux for shared state.

New features included a fake user log in and database of users. Not implemented in a real server method (yet)

By Henry Oberholtzer

## Technologies Used

- React
- Redux
- Redux Toolkit
- TypeScript
- JavaScript
- Vite
- Webpack
- Date FNs
- string-to-uuid

## Description

### User Stories

- See all inventory listed
- See specifications of inventory and properties of the product
- Access a new form to add a product to the inventory
- View details of a product by clicking on it
- View details of product in inventory
- Be able to decrease the amount in inventory by clicking a button
- PropTypes should be used for all properties

### Goals for Redux Refactor

- Redux manages all shared state
- All Redux reducers are pure functions
- Actions are successfully dispatched to specify changes to state.
- Reducers recieve and handle actions to correctly change the store's state.

### Component Tree

```md
App
├── Header
│ │ - View InventoryGrid
│ │ - View InventoryForm (to add new items)
├── InventoryGrid
│ ├── InventoryGridItem [iterated as needed]
│ │ - On click, view InventoryItemDetails rendered according to the items ID
├── InventoryItemDetails
│ │ - Displays all relevant information to the item
│ │ - Deletes item from inventory
│ │ - View IventoryForm to edit item
├── InventoryForm
│ │ - Finish editing / creating item
```

## Setup/Installation Requirements

- Download the repository using `git clone https://github.com/henry-oberholtzer/iventory-tracker.git` in terminal or downloading the ZIP folder from github
- Run `npm install` in the root folder
- To view the application on a dev server, run `npm dev`

## Known Bugs

- When navigating to "Edit Item" and clicking on "Add New Item" form information is retained
- itemAdjust current breaks the rule of no conditionals for hooks, looking into work-arounds

## Upcoming Changes

- Add console pop up to confirm choice to delete items from inventory
- Change "change quantity" to "add to cart"
- Add UserState
  - User Account Creation
  - User Cart
  - User "Ordering"
  - User Past orders

## License

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) (c) 2023

Original code licensed under GNU GPLv3

[Compact_Disc.jpg by Arun Kulshrestha](https://commons.wikimedia.org/wiki/File:Compact_Disc.jpg) is licensed under a CC BY-SA 2.5 via Wikimedia

[QT Europtype Font](https://www.ctan.org/tex-archive/fonts/qualitype/) (C)
1992 QualiType and licensed under a SIL OFL 1.1 and GNU GPL 2.0

Placeholder data is from Discogs, and used for educational purposes.
