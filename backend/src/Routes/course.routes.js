const express = require("express");
const Course = require("../Schema/course.schema");
const app = express.Router();

// ---------- (post Course) -------------
app.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.send("Course Added!!");
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Course) -------------
app.get("/", async (req, res) => {
  try {
    const course = await Course.find();
    res.send(course);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Course by id) -------------
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findOne({ _id: id });
    res.send(course);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (delete Course) -------------
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.deleteOne({ _id: id });
    res.send("Course Deleted");
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Update Course) -------------
app.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const {
    thumbnail,
    title,
    description,
    price,
    teacher,
    duration,
    validity,
    videolink,
  } = req.body;
  
  try {
    // -------------- (Thumbnail) ---------
    if (thumbnail) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { thumbnail: thumbnail } }
      );
      return res.send("newThumbnail updated");
    }

    // -------------- (Thumbnail) ---------
    if (title) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { title: title } }
      );
      return res.send("newTitle updated");
    }

    // -------------- (description) ---------
    if (description) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { description: description } }
      );
      return res.send("newDescription updated");
    }

    // -------------- (price) ---------
    if (price) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { price: price } }
      );
      return res.send("newPrice updated");
    }

    // -------------- (teacher) ---------
    if (teacher) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { teacher: teacher } }
      );
      return res.send("newTeacher updated");
    }

    // -------------- (duration) ---------
    if (duration) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { duration: duration } }
      );
      return res.send("newDuration updated");
    }

    // -------------- (validity) ---------
    if (validity) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { validity: validity } }
      );
      return res.send("newValidity updated");
    }

    // -------------- (videolink) ---------
    if (videolink) {
      const course = await Course.updateOne(
        { _id: id },
        { $set: { videolink: videolink } }
      );
      return res.send("newVideolink updated");
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = app;
