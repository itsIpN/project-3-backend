const mongoose = require(`mongoose`);

const Timepoint = mongoose.model(`Timepoints`, new mongoose.Schema({
    title: String,
    start: Date,
    variable: String,
    project_title: String,
    tests: Array,
    developer: String,
    timepoint_number: Number
}))

module.exports = Timepoint