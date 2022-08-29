import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { newContext } from '../App';
const Education = () => {

    const { setcstep, setdata, data } = useContext(newContext);
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

    const sub = (e) => {
        e.preventDefault();
        const { university, fromdate, todate, cgpa, ucity, ustate } = data;

        if (!university || !fromdate || !todate || !cgpa || !ucity || !ustate) {
            window.alert("Enter all Field")
            throw new Error("ENter all fields");
        }
        setcstep(2)
    }

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         localStorage.removeItem('token');
    //         navigate("/signin", { replace: true });
    //     }
    //  else {
    //     getreq();
    // }
    // }, [])

    return (
        <>
            <div className="container col-md-6 mt-5 shadow p-3 mb-5 bg-body rounded">
                <form className="ms-md-4 me-md-4 m-auto">
                    <h3 className="text-center mt-2 mb-5">Education Details</h3>
                    <div className="mb-3">
                        <label for="university" className="form-label">University Name</label>
                        <input type="text" className="form-control" name="university" value={data.university} onChange={handelInp} id="university" aria-describedby="university" />
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label for="fromdate" className="form-label">From Date</label>
                            <input type="date" className="form-control" name="fromdate" value={data.fromdate} onChange={handelInp} id="fromdate" aria-describedby="fromdate" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="todate" className="form-label">To Date</label>
                            <input type="date" className="form-control" name="todate" value={data.todate} onChange={handelInp} id="todate" aria-describedby="todate" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-md-4">
                            <label for="cgpa" className="form-label">CGPA</label>
                            <input type="number" className="form-control" name="cgpa" value={data.cgpa} onChange={handelInp} id="cgpa" aria-describedby="cgpa" />
                        </div>
                        <div className="mb-3 col-md-4">
                            <label for="city" className="form-label">City</label>
                            <input type="text" className="form-control" name="ucity" value={data.ucity} onChange={handelInp} id="city" aria-describedby="city" />
                        </div>
                        <div className="mb-3 col-md-4">
                            <label for="state" className="form-label">State</label>
                            <input type="text" className="form-control" name="ustate" value={data.ustate} onChange={handelInp} id="state" aria-describedby="state" />

                        </div>
                    </div>
                    <div className="text-center">

                        <button onClick={() => { setcstep(0) }} className="btn btn-danger m-2">Back</button>
                        <button onClick={sub} className="btn btn-primary m-2">Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Education