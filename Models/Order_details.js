const mongoose=require("mongoose")
const OrderSchema=new mongoose.Schema(
    {
        "order id":{
            type:String,
            required:true,
        },
        "order date":{
            type:String,
            required:true,
        },
        "product id":{
            type:String,
            required:true,
        },
        "quantity":{
            type:String,
            required:true,
        },
        "pickup location":{
            type:String,
            required:true,
        },
        "drop location":{
            type:String,
            required:true,
        },
        "delivery status":{
            type:String,
            default:"Pending",
        },
        "delivery date":{
            type:String,
        },
        "customer":{
            type:String,
            required:true,
        },
        "farmer":{
            type:String,
            required:true,
        },
        "delivery partner":{
            type:String,
            required:true,
        },

    },
    {timestamps:true}
)
module.exports=mongoose.model("Order",OrderSchema)