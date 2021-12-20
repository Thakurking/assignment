const CustomerModel = require("../../models/user/customer.model");
const BookingModel = require("../../models/booking/booking.model");
const VendorModel = require("../../models/vendor/vendor.model");

const { mongooseErrorHandler } = require("../../helper/Error/db.error");

exports.booking = async (req, res) => {
  const { source, destination, vendor, customer } = req.body;
  try {
    const saveCustomer = new CustomerModel({
      UserID: customer.id,
      FullName: customer.fullName,
      Mobile: customer.mobile,
      Email: customer.email,
    });
    const customerDetails = await saveCustomer.save();
    const saveBooking = new BookingModel({
      source: source,
      destination: destination,
      BookingID: req.body.bookingId,
      BookingTime: req.body.bookingTime,
      PickupTime: req.body.pickupTime,
    });
    const bookingDetails = await saveBooking.save();
    const saveVendor = new VendorModel({
      VendorID: vendor.id,
      DriverName: vendor.fullName,
      VehicleNumber: vendor.vehicleNumber,
      VehicleModel: vendor.vehicleModel,
    });
    const vendorDetails = await saveVendor.save();
    return res.json({ message: "Data Saved Successfully", status: true });
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    console.log(errors);
    if (errors) {
      return res.json({ message: errors, status: false });
    }
  }
};
