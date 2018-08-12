const router = require('express').Router();
const User = require('../models/User')

router.get("/", (req,res) => {
	const {page, perpage,sort} = req.query;


	User.paginate({}, { page: parseInt(page, 10), limit: parseInt(perpage, 10) , sort:{nama: parseInt(sort)}})
	.then(result => res.send(result.docs))
	// console.log(req.query.page)
	// res.send("AAAA");
})

router.post("/", (req,res) => {
	User.create(req.body)
	.then(data => res.send(data))
})


router.get("/edit/:id", (req,res) => {
	User.findById({_id : req.params.id})
	.then(data => res.send(data))
})

router.put("/edit/:id", (req,res) => {
	User.findByIdAndUpdate({_id : req.params.id}, { $set: { 
													nama: req.body.nama, 
													email : req.body.email,  
													nomor : req.body.nomor
	}})
	.then(data => {
		User.find({}).sort({nama: 1})
		.then(data => res.send(data))
	})
})

router.delete("/:id", (req,res) => {
	const id = req.params.id
	User.findByIdAndRemove(id)
	.then(data => res.send("Has been deleted"))
})

module.exports = router;