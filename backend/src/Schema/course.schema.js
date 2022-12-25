const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  teacher: { type: String, required: true },
  duration: { type: String, required: true },
  validity: { type: String, required: true },
  videolink: { type: String },
});

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
