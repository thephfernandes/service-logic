const router = require('express').Router();

router.get("/macas", (req, res) => {
	res.send("Estamos sem maças no momento, tente mais tarde");
});

router.get("/pizza", (req, res) => {
	res.json(
		[
			{
				"id": 1,
				"nome": "calabresa"
			},
			{
				"id": 2,
				"nome": "marguerita"
			},
			{
				"id": 3,
				"nome": "brigadeiro"
			}
		])
});

module.exports = router;