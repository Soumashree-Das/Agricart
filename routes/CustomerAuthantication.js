const router = require("express").Router();
const Customer = require("./Models/Customer");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newCustomer = new Customer({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.sec_para
    ).toString(),
    gender: req.body.gender,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    pincode: req.body.pincode,
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const customer = await Customer.findOne({ username: req.body.username });
    if (!customer) {
      return res.status(401).json("Wrong Credentials!!");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      customer.password,
      process.env.sec_para
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong Credentials!!");
    }

    const accessToken = jwt.sign(
      {
        id: customer._id,
        isAdmin: customer.isAdmin,
      },
      process.env.sec_jwt,
      { expiresIn: "3d" }
    );

    const { password, ...others } = customer._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
