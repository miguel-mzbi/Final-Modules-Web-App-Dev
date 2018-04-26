const express = require("express");
const router = express.Router();

const productsModel = require("./../models/product");
productsModel.methods(["get", "put", "post", "delete"]);
productsModel.register(router, "/products");

// router.get("/products", (res, req) => {
//     res.setEncoding("WORKING PRODUCTS");
// });

module.exports.router = router;