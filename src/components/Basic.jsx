import React, { useContext, useEffect } from 'react'
import { newContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Basic = () => {

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

    const sub = (e) => {
        e.preventDefault();
        const { firstname, lastname, email, phone, city, state } = data;

        if (!firstname || !lastname || !email || !phone || !city || !state) {
            window.alert("Enter all Field")
            throw new Error("ENter all fields");
        }
        setcstep(1);
    }

    // const getreq = async () => {
    //     const token = localStorage.getItem('token');
    //     try {
    //         const result = axios.get("http://localhost:5000/token", {
    //             headers: {
    //                 "Authorization": token
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    return (
        <>
            <div className="container col-md-6 mt-5 shadow p-3 mb-5 bg-body rounded">
                <form className="ms-md-4 me-md-4 m-auto" method="POST">
                    <h3 className="text-center mt-2 mb-5">Personal Information</h3>
                    <div className="row">
                        <div className="mb-3 col-md-4">
                            <label for="firstname" className="form-label">FirstName</label>
                            <input type="text" className="form-control" name="firstname" value={data.firstname} onChange={handelInp} id="name" aria-describedby="firstname" />
                            {/* <br />
                            {errors.firstname && <span>This field is required</span>}
                            <br /> */}
                        </div>
                        <div className="mb-3 col-md-4">
                            <label for="middlename" className="form-label">MiddleName</label>
                            <input type="text" className="form-control" name="middlename" value={data.middlename} onChange={handelInp} id="middlename" aria-describedby="middlename" />
                        </div>
                        <div className="mb-3 col-md-4">
                            <label for="lastname" className="form-label">LastName</label>
                            <input type="text" className="form-control" name="lastname" value={data.lastname} onChange={handelInp} id="lastname" aria-describedby="lastname" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={data.email} onChange={handelInp} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="Phone" className="form-label">Phone</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={handelInp} id="Phone" aria-describedby="Phone" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label for="city" className="form-label">City</label>
                            <input type="text" className="form-control" name="city" value={data.city} onChange={handelInp} id="city" aria-describedby="Phone" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="state" className="form-label">State</label>
                            <input type="text" className="form-control" name="state" value={data.state} onChange={handelInp} id="state" aria-describedby="Phone" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" onClick={sub} className="btn btn-primary">Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Basic