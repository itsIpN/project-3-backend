
const Timepoint = require(`../models/timepoint`)
const router = require(`express`).Router();

//routes
//index
router.get(`/`, async (req, res) => {
    try {
        res.status(200).json(await Timepoint.find({}))
    } catch (error) {
        res.status(400).json({ message: `bad request`})
    }
})
//create
router.post(`/`, async (req, res) => {
    req.body.title = `${req.body.variable} Timepoint ${req.body.timepoint_number}`
    for(let key in req.body) {
        if(req.body[key] === '') {
            delete req.body[key]
        }
    }

    try {
        res.status(201).json(await Timepoint.create(req.body))
    } catch (error) {
        res.status(400).json({ message: `bad request`})
    }
})






module.exports = router