const mongoose = require(`mongoose`);

const Test = mongoose.model(`Tests`, new mongoose.Schema({
    test: String,
}))

module.exports = Test