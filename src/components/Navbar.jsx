import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { newContext } from '../App';

const Navbar = () => {
    const { setcstep, setdata, data, setlocal } = useContext(newContext)
    const [useName, setuseName] = useState()
    const navigate = useNavigate();
    const getName = async () => {
        try {
            const token = localStorage.getItem('token')
            const result = await axios.get("https://portfoliobck.herokuapp.com/data/", {
                headers: {
                    "authorization": token
                }
            })

            setuseName(result.data.firstname);


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getName();
    }, [])

    const deleteToken = (e) => {
        e.preventDefault();

        // localStorage.removeItem('token');
        // localStorage.clear();
        setlocal({ token: null, id: null })

        navigate("/signin", { replace: true });
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <NavLink className="navbar-brand" exact to="/form">Portfolio_Builder</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="#">Welcome {useName}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/form">Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/signin" className="nav-link" onClick={deleteToken}>Logout</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar