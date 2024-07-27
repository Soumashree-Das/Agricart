const router = require("express").Router();
const Farmer = require("./models/FarmerLoginDetails");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register Farmer
router.post("/register", async (req, res) => {
  const newFarmer = new Farmer({
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
    farmingDetails: req.body.farmingDetails,
    farmingCertifications: req.body.farmingCertifications,
  });

  try {
    const savedFarmer = await newFarmer.save();
    res.status(201).json(savedFarmer);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login Farmer
router.post("/login", async (req, res) => {
  try {
    const farmer = await Farmer.findOne({ username: req.body.username });
    if (!farmer) {
      return res.status(401).json("Wrong Credentials!!");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      farmer.password,
      process.env.sec_para
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong Credentials!!");
    }

    const accessToken = jwt.sign(
      {
        id: farmer._id,
        isAdmin: farmer.isAdmin,
      },
      process.env.sec_jwt,
      { expiresIn: "3d" }
    );

    const { password, ...others } = farmer._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
