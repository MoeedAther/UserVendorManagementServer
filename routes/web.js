import express from 'express'
import userController from '../controllers/usercontroller.js';
// import venderController from '../controllers/vendercontroller.js'
import productsController from '../controllers/productscontroller.js';
import transactionController from '../controllers/transactioncontroller.js';
import depositController from '../controllers/depositcontroller.js';
import userInfoController from '../controllers/userinfocontroller.js';
// import venderInfoController from '../controllers/venderinfocontroller.js';
import userDepositWithdrawal from '../controllers/depositandwithdrawalcontroller.js';

const router=express.Router();

//User Registeration
router.post('/register/user', userController.createUser)

//User Login
router.post('/auth/user', userController.authUser)

//Vender Registeration
// router.post('/register/vender', venderController.createVender)

//Vender Login
// router.post('/auth/vender', venderController.authVender)

//Products Addition
router.post('/addproducts', productsController.addProducts)

//Products List
router.get('/products', productsController.getProductInfo)

//Initial Transaction Product Information
router.post('/producttransaction', productsController.getProductTransactionInfo)

//Final Transaction
router.post('/transaction', transactionController.Transaction)

//User Account Deposit
router.post('/deposit',depositController.Deposit)

//User Data
router.post('/userinfo',userInfoController.userInfo)

//Vender Data
// router.post('/venderinfo',venderInfoController.venderInfo)

//User Transaction Data
router.get('/usertransactions', transactionController.getUserTransactionInfo)

//Vender Transaction Data
router.get('/vendertransactions', transactionController.getVenderTransactionInfo) 

//Stripe Deposit
router.get('/deposit', userDepositWithdrawal.deposit) 

export default router