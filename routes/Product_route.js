const router = require("express").Router();
const Product = require("../Models/Product");
const {
  verifyToken,
  VerifyTokenAuthorization,
  VerifyTokenAdmin,
} = require("./Verify_token");

//Create
router.post("/", VerifyTokenAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update
router.put("/:id", VerifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", VerifyTokenAuthorization, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get product by id
router.get("/find/:id",  async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products
router.get("/", VerifyTokenAdmin, async (req, res) => {
  const qnew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qnew) {
      products = await Product.find().sort({ _id: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        Categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
