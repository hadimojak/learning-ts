var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost;
if (typeof originalCost === "number") {
    var cost = originalCost;
}
else {
    var x = originalCost;
}
var inventoryItemType;
(function (inventoryItemType) {
    inventoryItemType["Computer"] = "Computer";
    inventoryItemType["Forniture"] = "Forniture";
})(inventoryItemType || (inventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) { }
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: "Computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
});
