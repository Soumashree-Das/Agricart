const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema(
    {
       "product id":{
            type:String,
            required:true,
       },
       "photo":{
            type:String,
            required:true,
       },
       "Mrp":{
            type:Number,
            required:true,
       },
       "seller name":{
            type:String,
            required:true,
       },
       "place of origin":{
            type:String,
            required:true,
       },
       "description":{
            type:String,
            default:" ",
       },
       "date of produce":{
            type:String,
            required:true,
       },
       "units":{
            type:Number,
            required:true,
       },
       "growing practices":{
            type:String,
            required:true,
       }
    },{timestamps:true}
)
module.exports=mongoose.model("Product",ProductSchema)