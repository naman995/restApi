const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // trim: true,
  },
//   price: {
//     type: Number,
//     default: 0,
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   category: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   image: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   image2: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   image3: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   image4: {
//     type: String,
//     required: true,
//     trim: true,
//   },
});

// we will create a new collection
const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
 