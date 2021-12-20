const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    UserID: {
      type: String,
      required: [true, "Please Enter User ID"],
    },
    FullName: {
      type: String,
      required: [true, "Please Enter Your Full Name"],
    },
    Mobile: {
      type: String,
      required: [true, "Please Enter Your Phone Number"],
    },
    Email: {
      type: String,
      required: [true, "Please Enter Your Email"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema);
