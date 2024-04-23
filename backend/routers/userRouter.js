const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("../controllers/userController");
const cartController = require("../controllers/cartController");
const orderRouter = require("./orderRouter");
const productRouter = require("./productRouter");

const router = express.Router();

router.use("/orders", orderRouter);
router.use("/products", productRouter);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/create", userController.createUser);
router.get("/getAll", userController.getAllUsers);

router.use(authController.protect);

router.patch("/updatePassword", authController.updatePassword);
router.get("/me", userController.getMe);
router.patch("/updateMe", userController.updateMe, userController.updateUser);
router.delete("/deleteMe", userController.deleteUser);
router.get("/getCart", cartController.getCart);
router.patch("/addToCart", cartController.addToCart);
router.patch("/removeFromCart", cartController.removeFromCart);
router.patch("/cart/updateQuantity", cartController.updateQuantity);
router.get("/getCartPriceSummary", cartController.getCartPriceSummary);

module.exports = router;
