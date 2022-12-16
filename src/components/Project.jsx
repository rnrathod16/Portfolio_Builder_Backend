import React, { useContext, useEffect } from 'react'
import { newContext } from '../App';

import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Project = () => {
    const { setcstep, setdata, data } = useContext(newContext)
    const navigate = useNavigate();
    const handelInp = (e) => {
        const { name, value } = e.target;
        setdata((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        const { project, mentor, fromdateproject, todateproject, description } = data;

        if (!project || !mentor || !fromdateproject || !todateproject || !description) {
            window.alert("Enter all Field")
            throw new Error("ENter all fields");
        }
        const token = localStorage.getItem('token');
        try {
            const result = await axios.post("https://portfolioback.onrender.com/data/", { data, token });

            if (result.status === 200) {

                navigate("/portfolio", { replace: true })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         localStorage.removeItem('token');
    //         navigate("/signin", { replace: true });
    //     }
    // else {
    //     postreq();
    // }
    // }, [])

    return (
        <>
            <div className="container col-md-6 mt-5 shadow p-3 mb-5 bg-body rounded">
                <form className="ms-md-4 me-md-4 m-auto">
                    <h3 className="text-center mt-2 mb-5">Project Details</h3>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label for="project" className="form-label">Project Name</label>
                            <input type="text" className="form-control" name="project" value={data.project} onChange={handelInp} id="project" aria-describedby="project" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="mentor" className="form-label">Mentor Name</label>
                            <input type="text" className="form-control" name="mentor" value={data.mentor} onChange={handelInp} id="mentor" aria-describedby="mentor" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label for="fromdateproject" className="form-label">From Date</label>
                            <input type="date" className="form-control" name="fromdateproject" value={data.fromdateproject} onChange={handelInp} id="fromdateproject" aria-describedby="fromdateproject" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="todateproject" className="form-label">To Date</label>
                            <input type="date" className="form-control" name="todateproject" value={data.todateproject} onChange={handelInp} id="todateproject" aria-describedby="todateproject" />
                        </div>
                    </div>

                    <div className="row">
                        <div class="mb-3">
                            <label className="form-label">Description</label>

                            <textarea class="form-control" placeholder="Leave a comment here" value={data.description} name="description" onChange={handelInp} style={{ height: "100px" }}></textarea>

                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={() => { setcstep(1) }} className="btn btn-danger m-2">Back</button>

                        <button onClick={postData} className="btn btn-primary m-2">Generate</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Project
