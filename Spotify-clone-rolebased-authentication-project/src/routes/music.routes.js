const express = require("express");
const {
  createMusic,
  createAlbum,
  getAllMusics,
} = require("../controllers/music.controller");
const multer = require("multer");
const { authArtist, authUser } = require("../middlewares/auth.middleware");

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/upload", authArtist, upload.single("music"), createMusic);

router.post("/album", authArtist, createAlbum);

router.get("/", authUser, getAllMusics);

module.exports = router;
