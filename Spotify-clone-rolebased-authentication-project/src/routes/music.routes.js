const express = require("express");
const {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbumByAlbumId,
} = require("../controllers/music.controller");
const multer = require("multer");
const { authArtist, authUser } = require("../middlewares/auth.middleware");

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/upload", authArtist, upload.single("music"), createMusic);

router.post("/album", authArtist, createAlbum);

router.get("/", authUser, getAllMusics);

router.get("/all-albums", authUser, getAllAlbums);

router.get("/album/:albumId", authUser, getAlbumByAlbumId);

module.exports = router;
