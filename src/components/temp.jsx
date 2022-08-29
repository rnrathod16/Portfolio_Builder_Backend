import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import portsvg from '../img/portsvg.svg';
import portpro from '../img/portprofile.svg';
import Navbar from './Navbar';
require("./Portfolio.css")

const Portfolio = () => {
    const navigate = useNavigate();
    const [useData, setuseData] = useState({});
    const getdata = async () => {
        const token = localStorage.getItem('token')
        try {
            const result = await axios.get("http://localhost:5000/data/", {
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
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.removeItem('token');
            navigate('/signin', { replace: true })
        } else {
            getdata();
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className="portback">
                <div className="new">

                    <img src={portsvg} alt="bg" className="portimg shadow-lg p-3 mb-5 bg-body rounded" />
                </div>
                <h1 className="f1">Hello, I'am </h1>
                <h1 className="f2">{useData.firstname} {useData.lastname}</h1>

            </div>
            <div class="container text-center shadow-lg p-3 mb-5 bg-body rounded" style={{ marginTop: "50px" }}>
                <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">About Me</h3>
                <p className="blk">Hey, I am an {useData.firstname} intend to build a career with an organisation with dedicated people which will help me to explore myself, I’m a type person Once I say I’ll do something, I will complete it at any chance I am willing to work as a key player In challenging and creative environment.</p>

            </div>

            <div className="portback2">
                <div className="container text-center shadow-lg p-3 mb-5 bg-body rounded " style={{
                    marginTop: "128px",
                    position: "absolute",
                    left: "328px",
                    width: "458px"
                }}>
                    <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Personal Details</h3>
                    <p className="blk">Email:- {useData.email}</p>
                    <p className="blk">Phone:- {useData.phone}</p>
                    <p className="blk">City:- {useData.city}</p>
                    <p className="blk">State:- {useData.state}</p>



                    <img src={portpro} alt="bg" className="portimg2  rounded" style={{
                        position: "absolute",
                        left: "410px",
                        top: "-88px"
                    }} />

                </div>

            </div>
            <div className="container text-center shadow-lg p-3 mb-5 bg-body rounded " style={{
                marginTop: "-190px",
                position: "absolute",
                left: "119px",
                width: "621px"
            }}>
                <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Education</h3>
                <p className="blk">University:- {useData.university}</p>
                <p className="blk">From:- {useData.fromdate}</p>
                <p className="blk">To:- {useData.todate}</p>



                <p className="blk">CGPA:- {useData.cgpa}</p>
                <p className="blk">City:- {useData.ucity}</p>
                <p className="blk">State:- {useData.ustate}</p>





            </div>

            <div className="container text-center shadow-lg p-3 mb-5 bg-body rounded " style={{
                marginTop: "-190px",
                position: "absolute",
                right: "39px",
                width: "621px"
            }}>
                <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Project</h3>
                <p className="blk">Name:- {useData.project}</p>

                <p className="blk">From:- {useData.fromdateproject}</p>
                <p className="blk">To:- {useData.todateproject}</p>
                <p className="blk">Mentor:- {useData.mentor}</p>


                <p className="blk">Description:- {useData.description}</p>



            </div>
            <footer>

            </footer>
        </>
    )
}

export default Portfolio