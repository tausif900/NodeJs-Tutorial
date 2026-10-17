const ImageKit = require("imagekit");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATEKEY,
  publicKey: process.env.IMAGEKIT_PUBLICKEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = async (file, fileName) => {
  try {
    const result = await imageKit.upload({
      file: file,
      fileName: fileName,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadFile };
