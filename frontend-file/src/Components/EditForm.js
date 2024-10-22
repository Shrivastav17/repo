import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditForm() {

    var x1 = useRef();
    var x2 = useRef();
    var x3 = useRef();
    var x4 = useRef();
    let navigate = useNavigate();

    let params = useParams();
    console.log(params);

    const [val, setVal] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/repo/showrepoById/' + params.id)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setVal(json.data)

                console.log(params);
            })
    }, [params.id])


    function myfunc(e){
        e.preventDefault();
        var record = {
            lanNo: x1.current.value,
            rcNo: x2.current.value,
            make: x3.current.value,
            model: x4.current.value
        }
        console.log(record);
        var ans = JSON.stringify(record);
        console.log(ans);

        
    fetch('http://localhost:8080/repo/updaterepo/' + params.id , {
        method:"put",
        body:ans,
        headers:{
        "Content-Type":"application/JSON"
        }
    })
        .then(res => res.json())
        .then(json => { 
            console.log(json);
            navigate("/table")

        })

    }


    

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <form onSubmit={myfunc}>

                        <label className='mt-5'>LAN Number <span style={{ color: "red" }}>*</span></label>
                        <input  className='form-control' placeholder='Please Enter LAN Number' ref={x1} defaultValue={val.lanNo} />


                        <label className="mt-3">RC Number <span style={{ color: "red" }}>*</span></label>
                        <input  className='form-control' placeholder='Pleae Enter RC Number'ref={x2} defaultValue={val.rcNo} />

                        <label>Make <span style={{ color: "red" }}>*</span></label>
                        <input  className='form-control' placeholder='Please Enter Make' ref={x3} defaultValue={val.make} />

                        <label>Model <span style={{ color: "red" }}>*</span></label>
                        <input className='form-control' placeholder='Please Enter Model' ref={x4} defaultValue={val.model} />

                        <button className='btn btn-success' >Submit</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    )
}
