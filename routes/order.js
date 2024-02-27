const router=require("express").Router();
const orderController=require('../controllers/orderController');

router.post("/",orderController.order_create);
router.get("/",orderController.order_all);   //all data get
router.get("/:orderId",orderController.order_details);   // single data get
router.put("/:orderId",orderController.order_update);   //updating data
router.delete("/:orderId",orderController.order_delete);    //deleting data

// iske logic hume controller ke andr likhne ha

module.exports=router;