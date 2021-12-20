const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  BookingID: {
    type: String,
    required: [true, "Booking ID Required"],
  },
  BookingTime: {
    type: Date,
    default: Date,
  },
  PickupTime: {
    type: Date,
    default: Date,
  },
  source: {
    name: {
      type: String,
      required: [true, "Source Name Required"],
    },
    address: {
      address: {
        type: String,
        required: [true, "Source Address Required"],
      },
      location: {
        type: String,
        required: [true, "Source Location Required"],
      },
      city: {
        type: String,
        required: [true, "Source City Required"],
      },
      state: {
        type: String,
        required: [true, "Source State Required"],
      },
      postalCode: {
        type: String,
        required: [true, "Source Postal Code Required"],
      },
      country: {
        type: String,
        required: [true, "Source Country Required"],
      },
    },
    latitude: {
      type: String,
      required: [true, "Source Latitude Required"],
    },
    longitude: {
      type: String,
      required: [true, "Source Longitude Required"],
    },
  },
  destination: {
    name: {
      type: String,
      required: [true, "Destination Name Required"],
    },
    address: {
      address: {
        type: String,
        required: [true, "Destination Name Required"],
      },
      location: {
        type: String,
        required: [true, "Destination Location Required"],
      },
      city: {
        type: String,
        required: [true, "Destination City Required"],
      },
      state: {
        type: String,
        required: [true, "Destination State Required"],
      },
      postalCode: {
        type: String,
        required: [true, "Destination Postal Code Required"],
      },
      country: {
        type: String,
        required: [true, "Destination Country Required"],
      },
      coordinates: {
        latitude: {
          type: String,
          required: [true, "Destination Latitude Required"],
        },
        longitude: {
          type: String,
          required: [true, "Destination Longitude Required"],
        },
      },
    },
  },
});

module.exports = mongoose.model("booking", bookingSchema);

// {
// 	"context": "Trucking",
// 	"type": "Booking",
// 	"bookingId": "78500",
// 	"source": "MobileApp",
// 	"status": "Confirmed",
// 	"customer": {
// 		"id": 10349,
// 		"fullName": "John Doe",
// 		"mobile":  "+91 9980798456",
// 		"email":"john_doe@gmail.com"
// 	},
// 	"source": {
// 		"name": "AMC Mercado",
// 		"address": {
// 			"address": "1858, 2821, Mission College Road",
// 			"location": "Koramangala",
// 			"city": "Bangalore",
// 			"state": "Karnataka",
// 			"postalCode": "560034",
// 			"country": "India"
// 		},
// 		"latitude":"12.933664",
// 		"longitude":"77.616179"
// 	},
// 	"destination": {
// 		"name": "Jayem Logistics",
// 		"address": {
// 			"address": "#7, Road Number 10, KIADB",
// 			"location": "Whitefileld",
// 			"city": "Bangalore",
// 			"state": "Karnataka",
// 			"postalCode": "560066",
// 			"country": "India",
// 			"coordinates": {
// 				"latitude":"12.984955",
// 				"longitude":"77.727345"
// 			}
// 		}
// 	},
// 	"vendor": {
// 		"id": 18567,
// 		"fullName": "Ram",
// 		"vehicleNumber": "KA01AB9876",
// 		"vehicleModel": "Tata Ace"
// 	},
// 	"bookingTime": "2020-08-31T11:15:22-06:00",
// 	"pickupTime": "2020-08-31T15:00:00-00:00"
// }
