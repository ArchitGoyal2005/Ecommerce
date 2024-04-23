const Review = require("./../models/reviewModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");
const handlerFactory = require("./handlerFactory");
const { default: mongoose } = require("mongoose");

exports.setProductUserIds = (req, res, next) => {
  //Allow nested routes
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req?.user?.id;
  next();
};

exports.getRatingsByStars = catchAsync(async (req, res, next) => {
  const productId = req.params.productId;

  const ratings = await Review.aggregate([
    {
      $match: { product: new mongoose.Types.ObjectId(productId) },
    },
    {
      $group: {
        _id: "$rating",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: -1 },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: ratings,
  });
});

exports.getAllReviews = handlerFactory.getAll(Review);
exports.getReview = handlerFactory.getOne(Review);
exports.createReview = handlerFactory.createOne(Review);
exports.updateReview = handlerFactory.updateOne(Review);
exports.deleteReview = handlerFactory.deleteOne(Review);
