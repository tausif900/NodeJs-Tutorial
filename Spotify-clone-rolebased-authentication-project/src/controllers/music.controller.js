const jwt = require("jsonwebtoken");
const musicModel = require("../models/music.model");
const uploadFile = require("../service/storage.service");

const createMusic = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    if (decoded.role !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have access to create a music" });
    }

    const { title } = req.body;
    const file = req.file;

    console.log(file);

    const result = await uploadFile(file.buffer.toString("base64"));

    console.log(result);

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });

    res.status(201).json({
      message: "Music Created",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { createMusic };
