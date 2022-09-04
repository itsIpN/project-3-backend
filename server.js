//dependencies
const express = require(`express`)
const mongoose = require(`mongoose`)
const cors = require(`cors`)
const morgan = require(`morgan`)
const variableRouter = require(`./controllers/variables`)
const timepointRouter = require(`./controllers/timepoints`)
const testRouter = require(`./controllers/tests`)
const app = express()



//settings
require(`dotenv`).config()

const {PORT, MONGOURL} = process.env

//mongoDB
mongoose.connect(MONGOURL)
mongoose.connection
    .on(`connected`, () => {
        console.log(`connected to MongoDB`)
    })
    .on(`disconnected`, () => {
        console.log(`disconnected`)
    })
    .on(`error`, (error) => {
        console.log(`Error: ${error}`)
    })

app.use(express.json())
app.use(cors())
app.use(morgan(`dev`))


//routes
app.get(`/`, (req, res) => {
    res.send(`Shelf Life API`)
})

app.use(`/variable`, variableRouter)
app.use(`/timepoint`, timepointRouter)
app.use(`/test`, testRouter)




//listener
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})