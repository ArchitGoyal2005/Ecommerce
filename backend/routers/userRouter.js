const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("../controllers/userController");
const orderRouter = require("./orderRouter");
const router = express.Router();

router.use("/:sellerId/orders", orderRouter);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.use(authController.protect);

router.patch("/updatePassword", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMe", userController.updateMe, userController.updateUser);
router.delete("/deleteMe", userController.deleteUser);

module.exports = router;
