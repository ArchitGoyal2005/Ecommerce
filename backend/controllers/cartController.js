const User = require("./../models/userModel");
const Product = require("./../models/productModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");

exports.getCart = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      data: req.user.cart,
    },
  });
};

exports.addToCart = catchAsync(async (req, res, next) => {
  const isItemInCart = req.user.cart.some(
    (cartItem) => cartItem.product.toString() === req.body.product
  );

  if (isItemInCart) {
    return res.status(400).json({
      status: "error",
      message: "Item is already in the cart",
    });
  }

  const doc = await User.findByIdAndUpdate(
    req.user.id,
    {
      $push: { cart: req.body },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!doc) {
    return next(new AppError("No document found with the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.removeFromCart = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndUpdate(
    req.user.id,
    {
      $pull: { cart: req.body },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!doc) {
    return next(new AppError("No document found with the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.updateQuantity = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndUpdate(
    req.user.id,
    {
      $set: { "cart.$[e].quantity": req.body.quantity },
    },
    {
      arrayFilters: [{ "e._id": req.body.cartItemId }],
      new: true,
      runValidators: true,
    }
  );

  if (!doc) {
    return next(new AppError("No document found with the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getCartPriceSummary = catchAsync(async (req, res, next) => {
  const data = JSON.parse(req.query.cart);
  const cart = data.length === 0 ? req.user.cart : data;

  const products = await Promise.all(
    cart.map((item) =>
      Product.findById(item.product, { price: 1, discount: 1, seller: 0 })
    )
  );

  cart.forEach((item, i) => (item.product = products[i]));

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalDiscount = cart.reduce(
    (total, item) =>
      item.product.discount === 0
        ? total
        : total +
          Math.round(
            ((item.product.price * item.product.discount) / 100) * item.quantity
          ),
    0
  );

  const delivery = totalPrice - totalDiscount > 10000 ? 0 : 100;

  const totalBilledPrice = totalPrice - totalDiscount + delivery * cart.length;

  res.status(200).json({
    status: "success",
    data: {
      totalQuantity,
      totalItems: cart.length,
      totalPrice,
      totalDiscount,
      totalBilledPrice,
      delivery,
    },
  });
});
