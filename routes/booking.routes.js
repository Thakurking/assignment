const express = require("express");

const bookingRouter = express.Router();

const addBookingController = require("../controller/booking/booking.controller");

bookingRouter.post("/add-booking", addBookingController.booking);

module.exports = bookingRouter;
