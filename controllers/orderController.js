const Order=require("../model/Order")


//sare jo logic honge wo asynchronus honge

//Get all Orders
const order_all=async(req,res) =>{
    //async add krra h to try cathc add krna padega
    try{
        const order=await Order.find({},{_id:0});
        res.json(order);
       
    } catch(error){
        res.json({ message: error});
    }
};

//Single Order
const order_details=async(req,res) =>{
    try{
        const order=await Order.findById(req.params.orderId);
        res.json(order);
    } catch(error){
        res.json({ message: error});
        console.log(error);
    }
};

//Add New Order
const order_create=async(req,res) =>{
   
        const order=new Order({
            name: req.body.name,
            cost:req.body.cost,
            age: req.body.age,
            company:req.body.company
        });
        try{
            const savedOrder = await order.save();
            res.send(savedOrder);
    } catch(error){
        res.json({ message: error});
        console.log(error);
    }
};

//Update Order
const order_update=async(req,res) =>{
    try{
        const order={
            name: req.body.name,
            cost:req.body.cost,
            age: req.body.age,
            company:req.body.company
        };
    
    const updateOrder=await Order.findByIdAndUpdate(
        { _id:req.params.orderId },order);
        res.json(updateOrder);
    }catch(error){
        res.json({message:error});
    }
};
//Delete Order
const order_delete=async(req,res) =>{
    console.log(req.params.orderId);
    try{
        const removeOrder= await Order.findByIdAndDelete(req.params.orderId)
        res.json(removeOrder);
    }catch(error){
        res.json({message:error});
        console.log(error);
    }
};

// for using these all in router 

module.exports={
    order_all,
    order_details,
    order_create,
    order_update,
    order_delete
}