import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import portsvg from '../img/joy.svg';
import portpro from '../img/portprofile.svg';
import Navbar from './Navbar';
require("./Portfolio.css")

const Portfolio = () => {
    const navigate = useNavigate();
    const [useData, setuseData] = useState({});
    const getdata = async () => {
        const token = localStorage.getItem('token')
        try {
            const result = await axios.get("https://portfolioback.onrender.com/data/", {
                headers: {
                    "authorization": token
                }
            })

            const status = result.status;
            setuseData(result.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        getdata();

    }, [])

    return (
        <>
            <Navbar />
            <div className="portback">
                <div className="row container m-auto d-flex justify-content-center align-items-center" style={{ height: "inherit" }}>
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-3">

                        <img src={portsvg} alt="bg" className=" w-75 h-75" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="f1">Hello, I'am </h1>
                        <h1 className="f2">{useData.firstname} {useData.lastname}</h1>
                    </div>
                </div>
            </div>
            <div class="container text-center shadow-lg p-3 mb-5 bg-body rounded" style={{ marginTop: "50px" }}>
                <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">About Me</h3>
                <p className="blk">Hey, I am an {useData.firstname} intend to build a career with an organisation with dedicated people which will help me to explore myself, I’m a type person Once I say I’ll do something, I will complete it at any chance I am willing to work as a key player In challenging and creative environment.</p>

            </div>

            <div className="portback2">
                <div className="container row m-auto d-flex justify-content-center align-items-center">
                    <div className="container col-md-6 text-center shadow-lg p-3 mb-5 bg-body rounded ">
                        <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Personal Details</h3>
                        <p className="blk">Email:- {useData.email}</p>
                        <p className="blk">Phone:- {useData.phone}</p>
                        <p className="blk">City:- {useData.city}</p>
                        <p className="blk">State:- {useData.state}</p>

                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center order-3">
                        <img src={portpro} alt="bg" className="portimg2 rounded w-75 h-75" />
                    </div>

                </div>

                <div className="container row m-auto d-flex justify-content-center align-items-center">
                    <div className="container col-md-4 text-center shadow-lg bg-body rounded mb-5 mt-5">
                        <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Education</h3>
                        <p className="blk">University:- {useData.university}</p>
                        <p className="blk">From:- {useData.fromdate}</p>
                        <p className="blk">To:- {useData.todate}</p>
                        <p className="blk">CGPA:- {useData.cgpa}</p>
                        <p className="blk">City:- {useData.ucity}</p>
                        <p className="blk">State:- {useData.ustate}</p>
                    </div>

                    <div className="container col-md-4 text-center shadow-lg bg-body rounded mb-5 ">
                        <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Project</h3>
                        <p className="blk">Name:- {useData.project}</p>
                        <p className="blk">From:- {useData.fromdateproject}</p>
                        <p className="blk">To:- {useData.todateproject}</p>
                        <p className="blk">Mentor:- {useData.mentor}</p>
                        <p className="blk">Description:- {useData.description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Portfolio
