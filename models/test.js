const mongoose = require(`mongoose`);

const Test = mongoose.model(`Tests`, new mongoose.Schema({
    test: String,
    description: String,
}))

module.exports = Test