const router = require("express").Router();
const Cart = require("../Models/Cart");
const {
  verifyToken,
  VerifyTokenAuthorization,
  VerifyTokenAdmin,
} = require("./Verify_token");

//Create
router.post("/", verifyToken , async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update
router.put("/:id", VerifyTokenAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", VerifyTokenAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user cart
router.get("/find/:userId",  async (req, res) => {
  try {
    const cart = await Cart.findOne({userId:req.params.userId});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all cart
router.get("/",VerifyTokenAdmin,async(req,res)=>{
    try{
        const carts=await Cart.find()
        res.status(200).json(carts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
