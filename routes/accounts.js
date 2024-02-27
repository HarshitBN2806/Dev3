const router=require("express").Router();
const accountsController=require('../controllers/accountsController');
const addressController=require('../controllers/addressController');

router.post("/accounts/",accountsController.accounts_create);
router.get("/",accountsController.accounts_all);
router.get("/:accountId",accountsController.accounts_details);
router.put("/:accountId",accountsController.accounts_update);
router.delete("/:accountId",accountsController.accounts_delete);

router.post("/address/",addressController.address_create);
//router.get("/",addressController.accountByAddress);

module.exports=router;