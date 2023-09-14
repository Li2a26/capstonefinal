// import express
const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart")
const productController = require("../controller/products");
// import functions from controller
const {
  showProducts,
  showProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = productController

//get all products
router.get("/products", showProducts);

//get single product
router.get("/products/:id", showProductById);

//create a new product
router.post("/products", createProduct);

// Delete a product
router.delete("/products/:id", deleteProduct);

// Update a product
router.put("/products/:id", updateProduct);

// USER ROUTES
const userController = require("../controller/users")
const {
  showUsers,
  showUserById,
  createRegister,
  deleteUserById,
  updateUserById,
} = userController;

const Users = require("../model/users");
const users = new Users();
const bodyParser = require("body-parser");

//get all users
router.get("/users", showUsers);

//get single user
router.get("/users/:id", showUserById);

//create a new user
router.post("/register", bodyParser.json(), (req, res) => {
  users.createRegister(req, res);
});

//login a user
router.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
// Delete a user
router.delete("/users/:id",  deleteUserById);

// Update a user
router.put("/users/:id", updateUserById);


//login
// router.post("/user/login", userLogin);
const {
  showCart,
  showCartById,
  createCart,
  updateCart,
  deleteCart,
} = cartController;
// Get All Cart
router.get("/cart", showCart);
// Get Single Cart
router.get("/cart/:id", showCartById);
// Create New Cart
router.post("/cart", createCart);
// Update Cart
router.patch("/cart/:id", updateCart);
// Delete Cart
router.delete("/cart/:id", deleteCart);


// export default router
module.exports = router;