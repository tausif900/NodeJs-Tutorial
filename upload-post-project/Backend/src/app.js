const express = require("express");
// multer is used to send files related data to the DB from the server
const multer = require("multer");

//cors
const cors = require("cors");

const uploadFile = require("./service/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(cors());
app.use(express.json());

// through this express server will be able to read the file coming from the request
const upload = multer({ storage: multer.memoryStorage() });

// POST - Upload Image
app.post("/upload-post", upload.single("image"), async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({ message: "Post uploaded successfully", post });
});

// GET - get Image
app.get("/get-posts", async (req, res, next) => {
  const posts = await postModel.find();

  return res.status(200).json({
    message: "Post fetched successfully",
    posts,
  });
});

module.exports = app;
