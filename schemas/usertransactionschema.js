import mongoose from "mongoose"

// Defining Schema
const usertransactionSchema = new mongoose.Schema({
useremail:{type:String, required: true, trim:true}, // trim basically removes end spaces from value being stored
uproductbarcode:{type:String, required: true, trim:true}, 
uproductname:{type:String, required: true, trim:true},
uproductcategory:{type:String, required: true, trim:true},
uunitprice:{type:String, required: true, trim:true},
uunitspurchased:{type:String, required: true, trim:true},
upurchasetime:{type:String, required: true, trim:true},
<<<<<<< HEAD
=======
umonthandyear:{type:String, required: true, trim:true}, 
uyear:{type:String, required: true, trim:true},
umonth:{type:String, required: true, trim:true},
>>>>>>> f69b5a712c63f25f9821a432091a0a4db4abeeaa
upurchaseday:{type:String, required: true, trim:true},
utotalamount:{type:String, required: true, trim:true},
})

export default usertransactionSchema
