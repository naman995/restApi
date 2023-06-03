const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Products:product@cluster0.hxg3ipo.mongodb.net/Product?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    }
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e);
  });
  