let displayName = "hadi arbabi";
let inventoryType = "tv";
let trackingNumber = "123123hj";
let createDate = new Date();

interface Item {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
}

function getInventoryItem(trackingNumber: string): Item {}
const getProduct = (trackingNumber: string): Item => ();

// function saveInventoryItem((item: item) => void) {}

// const inventoryItem = getInventoryItem(trackingNumber);

// inventoryItem.createDate = new Date();

// saveInventoryItem(inventoryItem);
