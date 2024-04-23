const mongoose = require("mongoose");
const Product = require("./productModel");
const AppError = require("../utils/AppError");
const { ObjectId } = require("mongodb");

const orderSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: [true, "A order must belong to a user"],
    },
    seller: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: [true, "A order must belong to a seller"],
    },
    value: {
      type: Number,
      require: [true, "A order must have a value"],
    },
    deliveryCharges: {
      type: Number,
      default: 0,
    },
    orderStatus: {
      type: String,
      enum: ["delivered", "ordered", "shipped", "cancelled"],
      default: "ordered",
    },
    productDetails: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          require: [true, "A order must have a product"],
        },
        quantity: {
          type: Number,
          require: [true, "A product must have a quantity"],
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      transform: (_, returningDoc) => {
        returningDoc["id"] = returningDoc["_id"];
        delete returningDoc["_id"];
      },
    },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

orderSchema.pre("save", async function (next) {
  if (!this.isModified("productDetails")) return next();
  const promises = this.productDetails.map(async (detail) => {
    const product = await Product.findById(detail.product);
    return (
      Math.round(product.price - (product.price * product.discount) / 100) *
      detail.quantity
    );
  });
  const prices = await Promise.all(promises);
  const actualValue = prices.reduce((acc, curr) => acc + curr, 0);
  if (this.value && this.value !== actualValue)
    return next(
      new AppError(
        "Something went wrong in creating the order. Please re-order again",
        404
      )
    );
  this.value = actualValue;
  next();
});

orderSchema.pre(/^find/, async function (next) {
  // this.populate({ path: "buyer" });
  // console.log(this.getQuery());
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
