const userController = require("../controller/userController");
const express = require("express");
const userRoute = express();
userRoute.use(express.urlencoded({ extended: true }))



userRoute.post("/login", userController.login);

module.exports = userRoute;
