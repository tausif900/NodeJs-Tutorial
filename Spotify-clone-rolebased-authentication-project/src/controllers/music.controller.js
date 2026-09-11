const jwt = require("jsonwebtoken");
const musicModel = require("../models/music.model");
const uploadFile = require("../service/storage.service");

const createMusic = async (req, res) => {
  // token nikalo
  const token = req.cookies.token;

  // token nahi aya to ye return krdo
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // agr token aya to usko verify kro
  try {
    // verify krne pe jo bhi obj aaega usme user ki id or role hai usko decoded variable dedo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    // role agr artist nhi hai to ye return krdo
    if (decoded.role !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have access to create a music" });
    }

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
      artist: decoded.id,
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
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { createMusic };
