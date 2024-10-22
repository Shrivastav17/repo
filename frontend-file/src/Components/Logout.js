import React from 'react'
import Register from './Register'
import Login from './Login'
import '../Components/css/style.css'
export default function Logout() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-5 border mt-5 registerr'>
                    <h2 className='text-center'>Register</h2>
                        <Register></Register>
                    </div>

                    <div className='col-5 border mt-5 login'>
                    <h2 className='text-center'>Login</h2>
                        <Login></Login>
                    </div>
                </div>
            </div>

        </div>
    )
}
