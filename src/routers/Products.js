const express = require("express");
const router = new express.Router();

router.post("/products", async (req, res) => {
  try {
    const user = new Product(req.body);
    console.log(req.body);
    const createProduct = await user.save();
    res.status(201).send(createProduct);
  } catch (e) {
    res.status(201).send(e);
  }
});
// To get all Products
router.get("/products", async (req, res) => {
  try {
    const productsData = await Product.find({});
    res.send(productsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// To get a single Product
router.get("/products/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const productsData = await Product.find({ _id: _id });
    res.send(productsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// To Update a Product
router.patch("/products/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const productsData = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(productsData);
  } catch (e) {
    res.status(500).send(e);
  }
});
// To Delete a Product
router.delete("/products/:id", async (req, res) => {
  try {
    const productsData = await Product.findByIdAndDelete(req.pararm.id);
    res.send(productsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;