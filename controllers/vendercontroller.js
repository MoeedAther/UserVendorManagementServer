import {venderModel} from "../app.js"

class venderController{
    static createVender=async(req,res)=>
    {
        try {
            // First Barcode Identifier
            const identifier1="#"

            // Second Barcode Identifier
            const identifier2="="

            // Generating random three digit company code
            const max1=999
            const min1=100
            const range1=max1-min1+1
            const decimal_num1=Math.random() * range1
            const companycode=Math.floor(decimal_num1) + min1

            //Generating two digit rotation code
            const max2=99
            const min2=10
            const range2=max2-min2+1
            const decimal_num2=Math.random() * range2
            const rotation_code=Math.floor(decimal_num2) + min2

            //Generating two digit encryption index
            const max3=20
            const min3=10
            const range3=max3-min3+1
            const decimal_num3=Math.random() * range3
            const encryption_index=Math.floor(decimal_num3) + min3

            const {firstname, lastname, countrycode, email, phonenumber, password}= req.body // object destructuring

             //Generating User ID from phone number
             const replacement="0"
             if(phonenumber.length==10)
             {
                 var userbarcodeID=phonenumber;
             }
             else if(phonenumber.length>10)
             {
                 var userbarcodeID=phonenumber.substring(0,10);
             }
             else if(phonenumber.length==9)
             {
                 var userbarcodeID=phonenumber+replacement
             }
             else if(phonenumber.length==8)
             {
                 var userbarcodeID=phonenumber+replacement+replacement
             }
             else if(phonenumber.length==7)
             {
                 var userbarcodeID=phonenumber+replacement+replacement+replacement
             }
             else if(phonenumber.length==6)
             {
                 var userbarcodeID=phonenumber+replacement+replacement+replacement+replacement
             }
             else if(phonenumber.length==5)
             {
                 var userbarcodeID=phonenumber+replacement+replacement+replacement+replacement+replacement
             }
             else if(phonenumber.length==4)
             {
                 var userbarcodeID=phonenumber+replacement+replacement+replacement+replacement+replacement+replacement
             }
             else
             {
                 console.log("phonenumber invalid")
                 var userbarcodeID="0000000000"
             }
 
             // Generating Barcode
             const vendorbarcode1=identifier1+countrycode+companycode+rotation_code+encryption_index
             const vendorbarcode2=identifier2+userbarcodeID
             const vendorbarcode=vendorbarcode1+vendorbarcode2

            const doc = new venderModel({
                vfirstname:firstname,
                vlastname:lastname,
                vemail:email,
                vcountrycode:countrycode,
                vphonenumber:phonenumber,
                vpassword:password,
                vbarcode:vendorbarcode
            })
            const result = await doc.save()
            res.status(201).send({auth:"vender created"}) //status(201) changes states module from 200 to 201
        } catch (error) {
            console.log(error)
        }
    }

    static authVender=async(req,res)=>{
        try {
            const {email, password}=req.body
            const result=await venderModel.findOne({vemail:email})

            const user_info={
                rfullname:result.vfirstname+" "+result.vlastname,
                rphonenumber:result.vphonenumber,
                remail:result.vemail,
                raccountbalance:result.vbalance,
                rbarcode:result.vbarcode
            }

            if(result.vemail==email && result.vpassword==password)
            {
                res.send({auth:"auth success", userinfo:user_info})
            }
            else{
                res.send({auth:"auth failed"})
            }
        } catch (error) {
            console.log(error)
        }


    }
}
export default venderController