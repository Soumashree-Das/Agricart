const express = require("express");
const router = express.Router();
const Product = require("../Models/Stock_Details");
const multer = require("multer");
const path = require("path");

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Add a new product
router.post("/add", upload.single("photo"), async (req, res) => {
  const newProduct = new Product({
    photo: req.file.path,
    Mrp: req.body.Mrp,
    description: req.body.description,
    units: req.body.units,
    date_of_produce: req.body.date_of_produce,
    growing_practices: req.body.growing_practices,
    place_of_origin: req.body.place_of_origin,
    product_id: req.body.product_id,
    seller_name: req.body.seller_name,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get products based on search criteria
router.get("/search", async (req, res) => {
  const { product_id, seller_name, place_of_origin } = req.query;

  let query = {};
  if (product_id) query.product_id = product_id;
  if (seller_name) query.seller_name = seller_name;
  if (place_of_origin) query.place_of_origin = place_of_origin;

  try {
    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
