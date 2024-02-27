const mongoose=require('mongoose');



const OrderSchema=new mongoose.Schema({
    name : String,
    cost: Number,
    age : Number,
    company: String
},{ 
    versionKey: false
});

module.exports=mongoose.model("order",OrderSchema);