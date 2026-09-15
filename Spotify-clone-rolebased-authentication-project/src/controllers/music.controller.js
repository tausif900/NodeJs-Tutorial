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
  // yaha hum limit lagaskte hai ki ek baar me kitna data bhejna hai wrna eksath bhejege to client ka app ya RAM full hojaega
  const musics = await musicModel.find().limit(3).populate("artist");
  res
    .status(200)
    .json({ message: "Musics fetch successfully", musics: musics });
};

const getAllAlbums = async (req, res) => {
  // .select will give only response of which we have passes as a parameter and populate will give the details of that particular parameter we have given.
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist");
  res
    .status(200)
    .json({ message: "Albums fetch successfully", albums: albums });
};

const getAlbumByAlbumId = async (req, res) => {
  const albumId = req.params.albumId;
  const album = await albumModel.findById(albumId).populate("musics");
  res.status(200).json({ message: "Album fetched successfully", album: album });
};

module.exports = {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbumByAlbumId,
};
