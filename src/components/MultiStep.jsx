import React, { useEffect } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Basic from './Basic';
import Education from './Education';
import Project from './Project';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const steps = [
    'Personal Information',
    'Education',
    'Project Info',
];

const Form = (num) => {

    switch (num) {
        case 0:
            return <Basic />
        case 1:
            return <Education />
        case 2:
            return <Project />
        default:
            break;
    }
}

const MultiStep = ({ cstep, useName }) => {

    const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         localStorage.removeItem('token');
    //         navigate("/signin", { replace: true });
    //     }
    //     //  else {
    //     //     getreq();
    //     // }
    // }, [])


    return (
        <>
            <Navbar useName={useName} />
            <div className="container mt-5">
                <Stepper activeStep={cstep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            {Form(cstep)}
        </>
    )
}

export default MultiStep