const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "applied"
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
