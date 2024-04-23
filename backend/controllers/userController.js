const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");
const handlerFactory = require("./handlerFactory");

// exports.createUser = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "This route is not yet defined. Please Use /signup",
//   });
// };

exports.getMe = (req, res) => {
  res.status(200).json({
    data: {
      id: req.user._id,
      name: req.user.name,
      role: req.user.role,
    },
  });
};

exports.updateMe = (req, res, next) => {
  //create error if user POSTs password Data
  if (req.body.password || req.body.confirmPassword) {
    return next(
      new AppError(
        "This route is not for password updates!! Please use /updateMyPassword.",
        400
      )
    );
  }
  next();
};

exports.createUser = handlerFactory.createOne(User);
exports.getUser = handlerFactory.getOne(User);
exports.deleteUser = handlerFactory.deleteOne(User);
exports.updateUser = handlerFactory.updateOne(User);
exports.getAllUsers = handlerFactory.getAll(User);
