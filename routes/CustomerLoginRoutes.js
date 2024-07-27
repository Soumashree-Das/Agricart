const router = require("express").Router();
const Customer = require("../Models/Customer");
const {
  verifyToken,
  verifyTokenAuthorization,
  verifyTokenAdmin,
} = require("./Verify_token");

// Update Customer
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.sec_para
    ).toString();
  }

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Customer
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json("Customer has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Customer by ID
router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    const { password, ...others } = customer._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Customers
router.get("/", verifyTokenAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const customers = query
      ? await Customer.find().sort({ _id: -1 }).limit(5)
      : await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Customer Stats
router.get("/stats", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await Customer.aggregate([
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
