import  express  from "express";

import {  adminAction, loginAction, registerUser } from "../Controllers/user_controller.js";


 const userRoute = express.Router()
 userRoute.post('/registerUser',registerUser),
 userRoute.post('/login',loginAction)
 .post("/admin",adminAction)


export default userRoute;