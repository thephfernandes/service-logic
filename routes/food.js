const router = require('express').Router();

let inventory = [
	{
		id: 1,
		product: "apple",
		quantity: 10
	},
	{
		id: 2,
		product: "banana",
		quantity: 15
	},
	{
		id: 3,
		product: "orange",
		quantity: 20
	},
	{
		id: 4,
		product: "grapes",
		quantity: 8
	},
	{
		id: 5,
		product: "watermelon",
		quantity: 5
	},
	{
		id: 6,
		product: "strawberries",
		quantity: 12
	},
	{
		id: 7,
		product: "kiwi",
		quantity: 9
	},
	{
		id: 8,
		product: "pear",
		quantity: 18
	},
	{
		id: 9,
		product: "pineapple",
		quantity: 7
	},
	{
		id: 10,
		product: "peach",
		quantity: 14
	}
];


router.get("/inventory", (req, res) => {
	res.json(inventory);
});

router.get("/inventory/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const item = inventory.find(item => item.id === itemId);

	if (item) {
		res.json(item);
	} else {
		res.status(404).json({ message: "Item not found" });
	}
});

router.post("/inventory", (req, res) => {
	const newItem = req.body;
	newItem.id = inventory.length + 1;
	inventory.push(newItem);
	res.status(201).json(newItem);
});

router.put("/inventory/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const updatedItem = req.body;
	const index = inventory.findIndex(item => item.id === itemId);

	if (index !== -1) {
		inventory[index] = { ...inventory[index], ...updatedItem };
		res.json(inventory[index]);
	} else {
		res.status(404).json({ message: "Item not found" });
	}
});

router.delete("/inventory/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const index = inventory.findIndex(item => item.id === itemId);

	if (index !== -1) {
		const deletedItem = inventory.splice(index, 1);
		res.json(deletedItem[0]);
	} else {
		res.status(404).json({ message: "Item not found" });
	}
});

module.exports = router;