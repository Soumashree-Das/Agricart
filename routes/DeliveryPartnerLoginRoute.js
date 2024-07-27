const router = require("express").Router();
const DeliveryPartner = require("./models/DeliveryPartnerDetails");
const {
  verifyToken,
  verifyTokenAuthorization,
  verifyTokenAdmin,
} = require("./Verify_token");

// Update Delivery Partner
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.sec_para
    ).toString();
  }

  try {
    const updatedDeliveryPartner = await DeliveryPartner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDeliveryPartner);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Delivery Partner
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await DeliveryPartner.findByIdAndDelete(req.params.id);
    res.status(200).json("Delivery Partner has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Delivery Partner by ID
router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const deliveryPartner = await DeliveryPartner.findById(req.params.id);
    const { password, ...others } = deliveryPartner._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Delivery Partners
router.get("/", verifyTokenAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const deliveryPartners = query
      ? await DeliveryPartner.find().sort({ _id: -1 }).limit(5)
      : await DeliveryPartner.find();
    res.status(200).json(deliveryPartners);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Delivery Partner Stats
router.get("/stats", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await DeliveryPartner.aggregate([
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
