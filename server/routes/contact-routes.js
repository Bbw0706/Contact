const router = require('express').Router();
const User = require('../models/User')

router.get("/", (req,res) => {
	User.find({})
	.then(data => res.send(data))
})

router.post("/", (req,res) => {
	User.create(req.body)
	.then(data => res.send(data))
})


router.get("/:id", (req,res) => {
	User.findById({_id : req.params.id})
	.then(data => res.send(data))
})

router.put("/:id", (req,res) => {
	User.findByIdAndUpdate({_id : req.params.id}, { $set: { 
													nama: req.body.nama, 
													email : req.body.email,  
													nomor : req.body.nomor
	}})
	.then(data => {
		User.find({})
		.then(data => res.send(data))
	})
})

router.delete("/:id", (req,res) => {
	const id = req.params.id
	User.findByIdAndRemove(id)
	.then(data => res.send("Has been deleted"))
})

module.exports = router;