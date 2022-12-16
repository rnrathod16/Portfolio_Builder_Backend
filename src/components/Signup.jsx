import React, { useState } from 'react'
import back2 from '../img/back2.png'
import th from '../img/th.svg'
import avtar from '../img/avtar.svg'
import "../App.css"
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [getData, setgetData] = useState({});
    const navigate = useNavigate();
    const handelInp = (e) => {
        const { name, value } = e.target;
        setgetData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("https://portfolioback.onrender.com/", getData);

            if (result) {

                window.alert("userInserted")
                navigate("/signin", { replace: true })
            }


        } catch (error) {
            console.log(error.response.data);
            window.alert(error.response.data);
        }
    }

    return (
        <>
            <body style={{ backgroundImage: `url(${back2})`, overflow: "hidden" }} >


                <div className="row container m-auto" style={{ height: `100vh` }}>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={th} alt="bg" className='w-75 h-75' />
                    </div>
                    <div className="login-content col-md-6">
                        <form method="POST" className="fo container col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded">
                            <img src={avtar} alt="avtar" />
                            <h2 style={{ color: `#031bf1` }}>Registration</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">

                                    <input id="name" type="text" className="input" name="name" value={getData.name} onChange={handelInp} placeholder="Full Name" />
                                </div>
                            </div>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="div">

                                    <input type="email" className="input " name="email" value={getData.email} onChange={handelInp} placeholder="Email" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">

                                    <input type="password" className="input" name="password" value={getData.password} onChange={handelInp} placeholder="Password" />
                                </div>
                            </div>

                            <button className="bt" type="submit" onClick={postData} >Signup</button>
                            <div style={{ color: `rgb(129, 129, 129)` }}>Already have an Account ? <NavLink to="/signin" className="cnt dw" style={{ textDecoration: `none` }}>LOGIN</NavLink></div>
                        </form>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Signup
