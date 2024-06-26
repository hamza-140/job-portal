// models/jobModel.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  // Add more fields as needed
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
