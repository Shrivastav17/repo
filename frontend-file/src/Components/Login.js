import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import dataprocess, { dataprocess1 } from '../Functions/dataprocess';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tokenDataTransfer } from '../Redux/Reducers/tokenStorageSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const schema = yup.object({
  email: yup.string().min(0).max(30).required('Please Enter Name'),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
}).required();

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const notify = () => toast("Login Successfully!");


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data1) => {
    console.log(data1);

    dataprocess1('user/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data1)
    })
      .then((res) => {
        console.log(res);
        setMsg(res.msg)
        if (res.status) {
          localStorage.setItem("tokenValue", res.tokenValue);
          dispatch(tokenDataTransfer(res.tokenValue));
          notify();
          navigate('/repo')

        }
      })
      .catch((err) => {
        console.log(err);
      })

  
  }
  return (
    <div className='container'>
      <div className='row'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='mt-5'>User Name <span style={{ color: "red" }}>*</span></label>
          <input {...register("email")} className='form-control' placeholder='Enter User Name' />
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
        {msg}
      </div>
    </div>
  )
}
