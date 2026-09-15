const jwt = require("jsonwebtoken");
const musicModel = require("../models/music.model");
const uploadFile = require("../service/storage.service");
const albumModel = require("../models/album.model");

const createMusic = async (req, res) => {
  //  agr artist hai role to jo file user ne upload ki hai usko uplaod file method ko dedo, wo jo return krega usko result variable me daldo
  const { title } = req.body;
  const file = req.file;

  console.log(file);

  const result = await uploadFile(file.buffer.toString("base64"));

  console.log(result);

  // ab music table jo db me hai usme ye sb save krdo
  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  // or ye return krdo
  res.status(201).json({
    message: "Music Created",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
  // error aya to ye return krdo
};

const createAlbum = async (req, res) => {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics,
  });

  res.status(201).json({
    message: "Album Created Successfully",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      musics: album.musics,
    },
  });
};

const getAllMusics = async (req, res) => {
  const musics = await musicModel.find().populate("artist");
  res
    .status(200)
    .json({ message: "Musics fetch successfully", musics: musics });
};

module.exports = { createMusic, createAlbum, getAllMusics };
