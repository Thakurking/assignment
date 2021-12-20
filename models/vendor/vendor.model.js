const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  VendorID: {
    type: String,
    required: [true, "Vendor ID Required"],
  },
  DriverName: {
    type: String,
    required: [true, "Driver Name Required"],
  },
  VehicleNumber: {
    type: String,
    required: [true, "Vehicle Number Required"],
  },
  // VehicleMake: {
  //   type: String,
  //   required: [true, "Vehicle Make Required"],
  // },
  VehicleModel: {
    type: String,
    required: [true, "Vehicle Model Required"],
  },
});

module.exports = mongoose.model("vendor", vendorSchema);
