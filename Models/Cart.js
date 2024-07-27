const mongoose=require("mongoose")
const CartSchema=new mongoose.Schema(
    {
        UserID:{
            type:String,
            required:true,
            unique:true,
        },
        Products:[
            {
                ProductId:{
                    type:String,
                },
                Quantity:{
                    type:Number,
                    default:1,
                }
            }
        ]
        
        
    },{timestamps:true}
)
module.exports=mongoose.model("Cart",CartSchema)