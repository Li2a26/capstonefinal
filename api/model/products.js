// import connection
const db = require("../config/index");

// Get All Products
const getProducts = (result) => {
  db.query("SELECT * FROM Products", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get Single Product
const getProductById = (id, result) => {
  db.query(
    "SELECT * FROM Products WHERE productID = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Insert Product to Database
const insertProduct = (data, result) => {
  db.query("INSERT INTO Products SET ?", [data], (err, results) => {
    if (err) {
      console.log("Database error");
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update an existing product
const updateProductByID = (id, data, result) => {
  db.query(
    "UPDATE Products SET productPRICE = ?, productNAME = ?, productDESC = ?, productCAT = ?, productTYPE = ?, productUrl = ? WHERE productID = ?",
    [
      data.productPRICE,
      data.productNAME,
      data.productDESC,
      data.productCAT,
      data.productTYPE,
      data.productUrl,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result({ error: "Failed to update product." }, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete a product
const deleteProductByID = (id, result) => {
  db.query("DELETE FROM Products WHERE productID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = {
  getProducts,
  getProductById,
  insertProduct,
  updateProductByID,
  deleteProductByID,
};
