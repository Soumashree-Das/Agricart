const mongoose = require("mongoose");

const DeliveryPartnerSchema = new mongoose.Schema(
  {
    deliveryPartner: {
      type: String,
      required: true,
    },
    cityOfOperation: {
      type: String,
      required: true,
    },
    officeAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryPartner", DeliveryPartnerSchema);
