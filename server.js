const express = require("express");
const compression = require("compression")

const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(compression())

const bookingRouter = require("./routes/booking.routes");
app.use("/booking", bookingRouter);

async function DB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/demo-code");
    console.log("conntected to DB");
  } catch (error) {
    handleError(error);
  }
}
DB();
mongoose.connection.on("error", (err) => {
  logError(err);
});
const PORT = 5050;

const server = app.listen(PORT, () => {
  console.log(`Your server is listening on PORT ${PORT}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
// 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