const Address=require('../model/Address');
const Account=require('../controllers/accountsController');


const address_create=async(req,res) =>{
   
    const address=new Address({
       // Account_Id:Account.accounts.account_id,
        account_id:req.body.account_id,
        Billing_Street:req.body.Billing_Street,
        Billing_City:req.body.Billing_City,
        Billing_State:req.body.Billing_State,
        Billing_Code:req.body.Billing_Code,
        Billing_Country:req.body.Billing_Country
    });
    try{
        const savedAddress = await address.save();
        res.send(savedAddress);
} catch(error){
    res.json({ message: error});
    console.log(error);
}
};

const accountByAddress= async(req,res)=>{
    try{
        const accountByAddress=await Address.find({_id:req.body.address_id});
        res.json(accounts);
    } catch(error){
        res.json({ message: error});
        console.log(error);
    }
};

module.exports={
    address_create,
    accountByAddress
}
