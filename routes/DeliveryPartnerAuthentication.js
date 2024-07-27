const router = require("express").Router();
const DeliveryPartner = require("./models/DeliveryPartnerDetails");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register Delivery Partner
router.post("/register", async (req, res) => {
  const newDeliveryPartner = new DeliveryPartner({
    deliveryPartner: req.body.deliveryPartner,
    cityOfOperation: req.body.cityOfOperation,
    officeAddress: req.body.officeAddress,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.sec_para
    ).toString(),
  });

  try {
    const savedDeliveryPartner = await newDeliveryPartner.save();
    res.status(201).json(savedDeliveryPartner);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login Delivery Partner
router.post("/login", async (req, res) => {
  try {
    const deliveryPartner = await DeliveryPartner.findOne({ email: req.body.email });
    if (!deliveryPartner) {
      return res.status(401).json("Wrong Credentials!!");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      deliveryPartner.password,
      process.env.sec_para
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong Credentials!!");
    }

    const accessToken = jwt.sign(
      {
        id: deliveryPartner._id,
        isAdmin: deliveryPartner.isAdmin,
      },
      process.env.sec_jwt,
      { expiresIn: "3d" }
    );

    const { password, ...others } = deliveryPartner._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
