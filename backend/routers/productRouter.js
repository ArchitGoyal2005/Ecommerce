const express = require("express");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");
const reviewRouter = require("./reviewRouter");
const upload = require("../middlewares/multerMiddleware");
const router = express.Router({ mergeParams: true });

router.use("/:productId/reviews", reviewRouter);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    upload.array("images", 7),
    productController.uploadImages,
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
