import React, { useContext, useState } from 'react'
import back from '../img/1.png'
import bg from '../img/bg.svg'
import avtar from '../img/avtar.svg'
import "../App.css"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { newContext } from '../App'


const Signin = () => {

    const { setcstep, setdata, data, setlocal } = useContext(newContext)
    const [log, setlog] = useState({})
    const navigate = useNavigate();
    const handelInp = (e) => {
        const { name, value } = e.target;

        setlog((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }


    const postData = async (e) => {
        e.preventDefault();
        const { email, password } = log;
        try {

            const result = await axios.post("https://portfoliobck.herokuapp.com/signin", { email, password });

            if (result) {

                const token = result.data.token;
                const id = result.data.dat;

                localStorage.setItem("token", token);
                localStorage.setItem("useData", id)
                setlocal({ token, id });
                navigate("/form", { replace: true })
            }

        } catch (error) {
            console.log(error.response.data.message);
            window.alert(error.response.data.message);

        }
    }

    const demoLog = async (e) => {
        e.preventDefault();
        const email = "demo@gmail.com";
        const password = "1234";
        try {

            const result = await axios.post("https://portfoliobck.herokuapp.com/signin", { email, password });

            if (result) {

                const token = result.data.token;
                const id = result.data.dat;

                localStorage.setItem("token", token);
                localStorage.setItem("useData", id)
                setlocal({ token, id });
                navigate("/form", { replace: true })
            }

        } catch (error) {
            console.log(error.response.data.message);
            window.alert(error.response.data.message);

        }
    }

    return (
        <>
            <body style={{ backgroundImage: `url(${back})`, overflow: "hidden" }}>



                <div className="row container m-auto" style={{ height: `100vh` }} >
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-3" >
                        <img src={bg} alt="bg" className='w-75 h-75' />
                    </div>
                    <div className="login-content col-md-6 order-1" >
                        <form method="POST" className="fo container col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded">
                            <img src={avtar} alt="Avatar" style={{ marginTop: `45px` }} />
                            <h2 style={{ color: `#031bf1` }}> Welcome </h2>
                            <div className="input-div one">
                                <div className="i" >
                                    <i className="fas fa-user" />
                                </div> <div className="div" >

                                    <input type="text" className="input" name="email" value={localStorage.email} onChange={handelInp} placeholder="Email" />
                                </div>
                            </div>
                            <div className="input-div pass" >
                                <div className="i" >
                                    <i className="fas fa-lock" />
                                </div> <div className="div" >

                                    <input type="password" className="input mb-4" name="password" value={localStorage.email} onChange={handelInp} placeholder="Password" />
                                </div>
                            </div>
                            <NavLink to="/form" > <button type="submit" onClick={postData} className="bt">Login</button></NavLink>
                            <NavLink to="/form" > <button type="submit" onClick={demoLog} className="bt mt-3">Demo Login</button></NavLink>

                            <a href="/" className="mt-3" style={{ textDecoration: `none` }}> New User ? </a>
                            <NavLink to="/" className="cnt" style={{ textDecoration: `none`, marginBottom: `40px` }}>SIGNUP</NavLink>


                        </form>
                    </div>

                </div>

            </body>
        </>
    )
}

export default Signin