const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
      trim: true,
      maxLength: [40, "A product must have less or equal than 40 characters"],
      minLength: [5, "A product must have more or equal than 5 characters"],
    },
    category: {
      type: String,
      default: "Gifting",
      enum: {
        values: ["Electronics", "Household", "Gifting", "Clothing"],
      },
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
    },
    images: {
      type: [String],
      required: [true, "A product must have images"],
    },
    description: {
      type: String,
      trim: true,
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      max: [5, "The ratings average must be less than or equal to 5"],
      min: [0, "The ratings average must be more than or equal to 0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    sellerChoice: {
      type: Boolean,
      default: false,
    },
    seller: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: [true, "A product must be listed by a seller"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

productSchema.pre(/^findOne/, function (next) {
  this.populate({
    path: "seller",
    select: "name address.city",
  });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
