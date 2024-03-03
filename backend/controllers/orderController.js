const catchAsync = require("../utils/catchAsync");
const Order = require("./../models/orderModel");
const Product = require("./../models/productModel");
const handlerFactory = require("./handlerFactory");

exports.setBuyerIds = (req, res, next) => {
  //Allow nested routes
  req.body.buyer = req.user.id;
  next();
};

exports.getOrder = handlerFactory.getOne(Order);
// exports.createOrder = handlerFactory.createOne(Order);
exports.getAllOrders = handlerFactory.getAll(Order);
exports.updateOrder = handlerFactory.updateOne(Order);
exports.deleteOrder = handlerFactory.deleteOne(Order);

exports.createOrder = catchAsync(async (req, res, next) => {
  const details = await Promise.all(
    req.body.productDetails.map(async (productDetail) => {
      if (!productDetail.seller) {
        const currProduct = await Product.findById(productDetail.product);
        productDetail.seller = currProduct.seller._id;
      }
      return productDetail;
    })
  );

  const groupedProductDetail = details.reduce((acc, productDetail) => {
    const sellerId = productDetail.seller;
    if (!acc[sellerId]) {
      acc[sellerId] = [];
    }
    acc[sellerId].push(productDetail);
    return acc;
  }, {});

  const orderDocuments = Object.keys(groupedProductDetail).map((sellerId) => {
    return {
      ...req.body,
      productDetails: groupedProductDetail[sellerId].map((detail) => {
        return { ...detail, seller: undefined };
      }),
      seller: sellerId,
    };
  });

  const data = await Order.create(orderDocuments);
  const responseData = data.map((doc) => ({
    ...doc.toJSON(),
    value: doc.value,
  }));

  res.status(201).json({
    status: "success",
    data: responseData,
  });
});
