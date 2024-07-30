const mongoose = require("mongoose");

const DeliveryPartnerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cityOfOperation: {
      type: String,
      required: true,
    },
    deliveryPartner: {
      type: String,
      required: true,
    },
    officeAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryPartner", DeliveryPartnerSchema);
