const Test = require(`../models/test`)
const router = require(`express`).Router();

//routes
//index
router.get(`/`, async (req, res) => {
    try {
        res.status(200).json(await Test.find({}))
    } catch (error) {
        res.status(400).json({message: `bad request`})
    }
})


//create
router.post(`/`, async (req, res) => {
    for(let key in req.body) {
        if(req.body[key] === '') {
            delete req.body[key]
        }
    }

    try {
        res.status(201).json(await Test.create(req.body))
    } catch (error) {
        res.status(400).json({message: `bad request`})
    }
})


//delete
router.delete(`/:id`, async (req, res) => {
    try {
        res.status(200).json(await Test.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json({message: `bad request`})
    }
})






















module.exports = router