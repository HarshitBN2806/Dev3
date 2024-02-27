const Accounts=require('../model/Accounts');

//sare jo logic honge wo asynchronus honge

//Get all Accounts
const accounts_all=async(req,res) =>{
    //async add krra h to try catch add krna padega
    try{
        const accounts=await Accounts.find({},{_id:0});
        res.json(accounts);
       
    } catch(error){
        res.json({ message: error});
    }
};

//Single Accounts
const accounts_details=async(req,res) =>{
    try{
        const accounts=await Accounts.findById(req.params.accountId);
        res.json(accounts);
    } catch(error){
        res.json({ message: error});
        console.log(error);
    }
};

//Add New Accounts
const accounts_create=async(req,res) =>{
   
        const accounts=new Accounts({
            Account_Owner: req.body.Account_Owner,
            Account_Name: req.body.Account_Name,
            Parent_Account:req.body.Parent_Account,
            Account_Number: req.body.Account_Number,
            Account_Type:req.body.Account_Type,
            Annual_Revenue:req.body.Annual_Revenue,
            Phone:req.body.Phone,
            Industry:req.body.Industry,
            Employees:req.body.Employees,
            Website:req.body.Website
        });
        try{
            const savedAccounts = await accounts.save();
            res.send(savedAccounts);
    } catch(error){
        res.json({ message: error});
        console.log(error);
    }
};

//Update Accounts
const accounts_update=async(req,res) =>{
    try{
        const accounts={
            Account_Owner: req.body.Account_Owner,
            Account_Name: req.body.Account_Name,
            Parent_Account:req.body.Parent_Account,
            Account_Number: req.body.Account_Number,
            Account_Type:req.body.Account_Type,
            Annual_Revenue:req.body.Annual_Revenue,
            Phone:req.body.Phone,
            Industry:req.body.Industry,
            Employees:req.body.Employees,
            Website:req.body.Website
        };
    
    const updateAccounts=await Accounts.findByIdAndUpdate(
        { _id:req.params.accountId },accounts);
        res.json(updateAccounts);
    }catch(error){
        res.json({message:error});
    }
};
//Delete Accounts
const accounts_delete=async(req,res) =>{
    console.log(req.params.accountId);
    try{
        const removeAccounts= await Accounts.findByIdAndDelete(req.params.accountId)
        res.json(removeAccounts);
    }catch(error){
        res.json({message:error});
        console.log(error);
    }
};

// for using these all in router 

module.exports={
    accounts_all,
    accounts_details,
    accounts_create,
    accounts_update,
    accounts_delete
}