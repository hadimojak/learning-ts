let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = string | number;

let originalCost: Cost;

if (typeof originalCost === "number") {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}

enum inventoryItemType {
  Computer = "Computer",
  Forniture = "Forniture",
}

interface InventoryItem {
  displayName: string;
  inventoryType: "Forniture" | "Computer";
  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "MacBook Pro 15 Retina",
  inventoryType: "Computer",
  trackingNumber: "MBP123456",
  createDate: new Date(),
});
