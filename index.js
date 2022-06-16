const express = require("express");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const messageRouter = require("./messageRouter");

const app = express();
app.use(express.json());
app.use("/chat", messageRouter);
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbln9:dbln9@cluster0.dmygb.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
