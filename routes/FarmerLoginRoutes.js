const router = require("express").Router();
const Farmer = require("../models/Farmer");
const {
  verifyToken,
  verifyTokenAuthorization,
  verifyTokenAdmin,
} = require("./Verify_token");

// Update Farmer
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.sec_para
    ).toString();
  }

  try {
    const updatedFarmer = await Farmer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFarmer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Farmer
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await Farmer.findByIdAndDelete(req.params.id);
    res.status(200).json("Farmer has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Farmer by ID
router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    const { password, ...others } = farmer._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Farmers
router.get("/", verifyTokenAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const farmers = query
      ? await Farmer.find().sort({ _id: -1 }).limit(5)
      : await Farmer.find();
    res.status(200).json(farmers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Farmer Stats
router.get("/stats", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await Farmer.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
