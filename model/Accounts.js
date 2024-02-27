const mongoose=require('mongoose');

const AccountsSchema=new mongoose.Schema({

    Account_Owner: String,
    Account_Name: String,
    Parent_Account: String,
    Account_Number: Number,
    Account_Type: String,
    Annual_Revenue:String,
    Phone:Number,
    Industry:String,
    Employees:Number,
    Website:String

});

module.exports=mongoose.model("account",AccountsSchema);