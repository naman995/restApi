const express = require("express");
require("./db/conn");
const Product = require("./models/products");
const productRouter = require("./routers/Products");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.get("/", async (req, res) => {
  res.send("Hello World");
});
app.use(productRouter);


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
