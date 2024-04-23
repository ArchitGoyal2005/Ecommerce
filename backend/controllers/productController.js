const Product = require("./../models/productModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");
const handlerFactory = require("./handlerFactory");
const uploadOnCloudinary = require("../utils/cloudinary");

exports.uploadImages = catchAsync(async (req, res, next) => {
  const imagesPath = req.files.map((img) => img.path);
  if (!imagesPath) return next(new AppError("Images is required", 400));

  const uploadedImages = imagesPath.map((img) => {
    try {
      const imgPath = uploadOnCloudinary(img);
      return imgPath;
    } catch (error) {
      console.log(error);
    }
  });

  if (uploadedImages.length !== imagesPath.length)
    return next(
      new AppError("there was an error in uploading the images", 400)
    );

  req.body.images = await Promise.all(uploadedImages);

  next();
});

exports.getAllProducts = handlerFactory.getAll(Product);
exports.getProduct = handlerFactory.getOne(Product);
exports.createProduct = handlerFactory.createOne(Product);
exports.updateProduct = handlerFactory.updateOne(Product);
exports.deleteProduct = handlerFactory.deleteOne(Product);
