import { checkpass, encryptpass } from "../Middleware/encrypt_middleware.js";
import { tokengenerate, verifytoken } from "../Middleware/token_middleware.js";
import userModel from "../Models/user_model.js";

const registerUser = async (req,res)=>{
    var { name, email, password , confirmPassword } = req.body;
    var userpassword = encryptpass(password)
        // console.log(userpassword)
        console.log(req.body);

        const datatoinsert = {
            name: name,
            email: email,
            password: userpassword
        }
        console.log(datatoinsert);
        try {

            var email = await userModel.find({ email: req.body.email })
            // console.log(email)

            if (email.length > 0) {
                res.status(200).send({ msg: 'Email already exist', data: null })
            }

            else {
                var userinstance = new userModel(datatoinsert)
                var after_insert = await userinstance.save()
                res.status(200).send({ msg: 'Registration Successfull', data: after_insert })
            }


        }
        catch (err) {
            res.status(403).send({ msg: 'err', data: err })
        }
}


const loginAction = async (req,res)=>{
    var { email, password } = req.body;

    var ans_email = await userModel.find({email:email});
    console.log(ans_email);


    if(ans_email.length > 0){
        if(checkpass(ans_email[0]['password'],password)){
            var tokenPayload = {
                id:ans_email[0]['_id'],
                name:ans_email[0]['name'],
                email:ans_email[0]['email'],
            }
            var tokenValue = tokengenerate(tokenPayload);
            res.send({msg:'Succes',tokenValue:tokenValue,status:true})    
        }
        else{
            res.send({msg:'Invalid Email or Password',status:false})
        }
    }
    else{
        res.send({msg:'Invalid Email or Password',status:false})
    }

}


const adminAction = async (req,res)=>{
    var { email, password } = req.body;

    var ans_email = await userModel.find({email:email});
    console.log(ans_email);


    if(ans_email.length > 0){
        if(checkpass(ans_email[0]['password'],password)){
            var tokenPayload = {
                id:ans_email[0]['_id'],
                name:ans_email[0]['name'],
                email:ans_email[0]['email'],
            }
            var tokenValue = tokengenerate(tokenPayload);
            res.send({msg:'Succes',tokenValue:tokenValue,status:true})    
        }
        else{
            res.send({msg:'Invalid Email or Password',status:false})
        }
    }
    else{
        res.send({msg:'Invalid Email or Password',status:false})
    }

}


 export {
    registerUser,loginAction,adminAction
 };