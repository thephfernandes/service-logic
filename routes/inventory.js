const router = require('express').Router();
const inventoryData = require('../data/inventoryData');

router.get("/inventory", (req, res) => {
	res.json(inventoryData);
});

router.get("/inventory/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const item = inventoryData.find(item => item.id === itemId);

	if (item) {
		res.json(item);
	} else {
		res.status(404).json({ message: "Item not found" });
	}
});

router.post("/inventory", (req, res) => {
	const newItem = req.body;
	newItem.id = inventoryData.length + 1;
	inventoryData.push(newItem);
	res.status(201).json(newItem);
});

router.put("/inventory/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const updatedItem = req.body;
	const index = inventoryData.findIndex(item => item.id === itemId);

	if (index !== -1) {
		inventoryData[index] = { ...inventoryData[index], ...updatedItem };
		res.json(inventoryData[index]);
	} else {
		res.status(404).json({ message: "Item not found" });
	}
});

router.delete("/inventory/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const index = inventoryData.findIndex(item => item.id === itemId);

	if (index !== -1) {
		const deletedItem = inventoryData.splice(index, 1);
		res.json(deletedItem[0]);
	} else {
		res.status(404).json({ message: "Item not found" });
	}
});

module.exports = router;