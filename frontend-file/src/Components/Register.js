// import React from 'react'
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import { ToastContainer, toast } from 'react-toastify';
// import { dataprocess } from '../Functions/dataprocess';
// import { useNavigate } from 'react-router-dom';



// const schema = yup.object({
//     name: yup.string().min(0).max(25).required('Please Enter Name'),
//     email: yup.string().email("Invalid email format").required("Email is required"),
//     password: yup
//     .string()
//     .required("Password is required")
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//     .matches(/[0-9]/, "Password must contain at least one number")
//     .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
//     }).required();
  

// export default function Register() {
//     const notify = () => toast("Your Registration Successfully!");
//     const navigate = useNavigate();

//     const { register, handleSubmit, formState:{ errors } } = useForm({
//         resolver: yupResolver(schema)
//       });
//       const onSubmit = (data) => {
//         console.log(data);
//         if(data != '' ){
//           dataprocess("user/registerUser",{
//               method:"post",
//               headers:{'Content-Type': 'application/json'},
//               body: JSON.stringify(data)
//           })
//           .then((res)=>{
//               console.log(res);
//               navigate('/login')
            
//           })
//           .catch((err) => {
//               console.log(err);
//           });
         
//       }
//       }
    


//   return (
//     <div className='container'>
//         <div className='row'>
//         <form onSubmit={handleSubmit(onSubmit)}>
//     <label className='mt-5'>User Name <span style={{color: "red"}}>*</span></label>
//       <input {...register("name")} className='form-control' placeholder='Please Enter User Name'/>
//       <p>{errors.Name?.message}</p>
        
//       <label>Email <span style={{color: "red"}}>*</span></label>
//       <input {...register("email")} className='form-control' placeholder='Please Enter Valid Email ID'/>
//       <p>{errors.email?.message}</p>

//       <label>Password <span style={{color: "red"}}>*</span></label>
//       <input  type='password'{...register("password")} className='form-control' placeholder='Please Enter Password'/>
//       <p>{errors.password?.message}</p>
      
//      <button onClick={notify} className='btn btn-success mb-3'>Submit</button>
//      <ToastContainer />
//     </form>
//         </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { dataprocess } from '../Functions/dataprocess';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Components/css/style.css';
const schema = yup.object({
    name: yup.string().min(0).max(25).required('Please Enter Name'),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
}).required();

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const notify = () => toast("Your Registration Successfully!");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        if (data != '') {
            dataprocess("user/registerUser", {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((res) => {
                    console.log(res);
                    notify();
                    navigate('/login');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container'>
            <div className='row'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='mt-5'>User Name <span style={{ color: "red" }}>*</span></label>
                    <input {...register("name")} className='form-control' placeholder='Please Enter User Name' />
                    <p>{errors.name?.message}</p>

                    <label>Email <span style={{ color: "red" }}>*</span></label>
                    <input {...register("email")} className='form-control' placeholder='Please Enter Valid Email ID' />
                    <p>{errors.email?.message}</p>

                    <label>Password <span style={{ color: "red" }}>*</span></label>
                    <div className="input-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register("password")}
                            className='form-control'
                            placeholder='Please Enter Password'
                        />
                        <div className="input-group-append">
                            <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <p>{errors.password?.message}</p>

                    <button  type="submit" className='btn btn-success mb-3'>Submit</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

