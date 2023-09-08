// import express
const express = require("express");
const router = express.Router();

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
  createUser,
  deleteUser,
  updateUser,
} = userController;
// const { userLogin } = require("../model/users");

//get all users
router.get("/users", showUsers);

//get single user
router.get("/users/:id", showUserById);

//create a new user
router.post("/users", createRegister);
// Delete a user
router.delete("/users/:id",  deleteUserById);

// Update a user
router.put("/users/:id", updateUserById);

//login
// router.post("/user/login", userLogin);

// export default router
module.exports = router;