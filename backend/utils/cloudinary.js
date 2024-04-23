const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadOnCloudinary = async function (localFilePath) {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return res.url;
  } catch (error) {
    console.log(error);
  } finally {
    fs.unlinkSync(localFilePath);
  }
};

module.exports = uploadOnCloudinary;
