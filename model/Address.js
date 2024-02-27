const mongoose=require('mongoose');

const AddressSchema=new mongoose.Schema({

    account_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'account'
    },
    Billing_Street:String,
    Billing_City:String,
    Billing_State:String,
    Billing_Code:Number,
    Billing_Country:String

});

module.exports=mongoose.model("address",AddressSchema);