import React, { useState } from 'react'
import './LoginForm.css';

function LoginForm() {

    const [values, setValues] = useState({
        email :"",
        password : "",
    });

    const [errors, setErrors] = useState({})

    const validationInput = (data) =>{
        let error = {};
        if(!data.email){
            error.email = "Email Required";
        }else if(!/\S+@\S+\.\S+/.test(data.email)){
            error.email ="Email is invalid";
        }
        if(!data.password){
            error.password = "Password Required";
        }else if(data.password.length < 5){
            error.password = "Password must be greater than 5 letter";
        }
        return error;
    }

    const handleChange =(event) =>{
        setValues ({...values ,
                 [event.target.name] : event.target.value,
                });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validationInput(values));
        console.log(values);
    }

    return (
        <div className='Login-header'>
            <div className='center'>
                <br />
                <div>
                    <h4 className='heading' style={{ fontSize: "30px" }}>Login User</h4>
                </div>
                <br />
                <div>
                    <form>
                        <div className="form-group">
                            <label
                                style={{ fontSize: "25px"}} >
                                Email address</label>
                            <input type="email" className="form-control" name="email" value={values.email} onChange ={handleChange}
                                style={{ background: "#B2BEB5", padding: "20px" }} aria-describedby="emailHelp" placeholder="Enter email" />
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>

                        <div className="form-group">
                            <label
                                style={{ fontSize: "25px"}}>
                                Password</label>
                            <input type="password" class="form-control" name="password" value={values.password} onChange ={handleChange}
                             style={{ background: "#B2BEB5", padding: "20px" }} placeholder="Password" />
                            {errors.password && <p className='error'>{errors.password}</p>}
                        </div>
                        <br />

                        <button type="button"  onClick={handleSubmit}
                        style={{ color: "white", position: "relative", left: "150px", top: "20px", border: "1px solid #f80759",
                            background: "#f80759", padding: "10px", borderRadius: "20px", fontSize: "20px", cursor: "pointer"
                        }}>
                            Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
