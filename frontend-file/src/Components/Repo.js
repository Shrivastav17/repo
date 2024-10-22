import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import '../Components/css/home.css';

const formschema = yup.object({
  lanNo: yup
    .string()
    .max(15)
    .required("LAN Number is required")
    .matches(/^[A-Za-z0-9_-]+$/),
  rcNo: yup.string().max(10).required("RC Number Is Required"),
  make: yup.string().required("Make Is Required"),
  model: yup.string().required("Model Is Required"),
}).required();

export default function Repo() {
  const [fileData, setFileData] = useState(null);
  const [status, setStatus] = useState(false);
  let navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formschema)
  });

  const onSubmit = (data) => {
    if (status) {
      const formData = new FormData();
      formData.append("lanNo", data.lanNo);
      formData.append("rcNo", data.rcNo);
      formData.append("make", data.make);
      formData.append("model", data.model);
      formData.append("user_image", fileData);
      formData.append("timestamp", new Date().toISOString());

      fetch('http://localhost:8080/repo/addrepo', {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          toast("Your Form Successfully Submitted!");
          navigate("/table")
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert('Please select a file to upload');
    }
  };

  const handleFileChange = (e) => {
    setFileData(e.target.files[0]);
    setStatus(true);
  };

  return (
    <>
      <div className='container container1'>
        <div className='row'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className='mt-3'>LAN Number <span style={{ color: "red" }}>*</span></label>
            <input {...register("lanNo")} className='form-control' placeholder='Please Enter LAN Number' />
            {errors.lanNo && <p>{errors.lanNo.message}</p>}

            <label className="mt-3">RC Number <span style={{ color: "red" }}>*</span></label>
            <input {...register("rcNo")} className='form-control' placeholder='Please Enter RC Number' />
            {errors.rcNo && <p>{errors.rcNo.message}</p>}

            <label>Make <span style={{ color: "red" }}>*</span></label>
            <input {...register("make")} className='form-control' placeholder='Please Enter Make' />
            {errors.make && <p>{errors.make.message}</p>}

            <label>Model <span style={{ color: "red" }}>*</span></label>
            <input {...register("model")} className='form-control' placeholder='Please Enter Model' />
            {errors.model && <p>{errors.model.message}</p>}
           <br/>
            <input onChange={handleFileChange} type='file' /> <br /> <br/>
            <button className='btn btn-success btn1' type='submit'>Submit</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}
