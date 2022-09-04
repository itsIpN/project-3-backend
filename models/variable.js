const mongoose = require(`mongoose`);

const Variable = mongoose.model(`Variables`, new mongoose.Schema({
    variable: String,
    project_title: String,
    production_date: Date,
    preferred_test_day: String,
    tests: Array,
    developer: String,
    timepoints: Array,
    description: String
}))

module.exports = Variable