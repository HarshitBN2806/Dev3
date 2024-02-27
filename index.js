const express = require('express');
const mongoose= require('mongoose');
const dotenv=require('dotenv');
const mongodb=require('mongodb');
const cors=require('cors');

dotenv.config();

const app=express();
mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.error("Error connecting to db:", error.message);
  });


  // COnnection from local host

//mongoose.connect('mongodb://127.0.0.1:27017/mydb');

// const OrderSchema=mongoose.Schema({
//     name: String,
//     cost:Number
// });
// const OrderModel = mongoose.model("orders",OrderSchema )
// app.get("/getOrders",(req,res)=>{
//    OrderModel.find({}).then(function(orders){
//     res.json(orders)
//    }).catch(function(err){
//     console.log(err)
//    })
// });


// Import Routes
// const orderRoutes=require("./routes/order");

const accountsRoutes=require("./routes/accounts");

//Middlewares - it is used as a middle ware for sending or posting data 
// using Post Man
app.use(express.json());
app.use(cors());

//route Middleware

 //app.use("/api/orders",orderRoutes);

app.use("/api/Accounts",accountsRoutes);

app.listen(3001,()=>{
    console.log("Server is running")
});