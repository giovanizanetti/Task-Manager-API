const multer = require("multer");

const avatar = multer({
  limits: {
    fileSize: 1000000, //1MB
  },
  fileFilter(req, file, cb) {
    const imageType = /\.(jpg|jpeg|png)$/;

    if (!file.originalname.match(imageType)) {
      return cb(new Error("Please upload an image of format jpg, jpeg or png"));
    }

    cb(undefined, true);
  },
}).single("avatar");

module.exports = {
  avatar,
};
