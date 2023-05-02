// import { venderModel,venderTransactionModel } from "../app.js"

// class venderInfoController{
//     static venderInfo=async(req,res)=>{
//         try {
//             const {vender_email}=req.body
//             const today = new Date();
//             var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//             const result1=await venderModel.findOne({vemail:vender_email})
//             const result2=await venderTransactionModel.find({vpurchaseday:date})
//             let todaysspendings=0;

//             result2.map((total)=>{
//                 todaysspendings=todaysspendings+ parseInt(total.vtotalamount)

//         })           
//             console.log(todaysspendings)
//                 res.send({balance:result1.vbalance, dayspending:todaysspendings})
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }
// export default venderInfoController