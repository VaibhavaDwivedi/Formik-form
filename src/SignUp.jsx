import React from "react";
import Button from "./Button";
import {Link} from "react-router-dom"
import Input from "./Input";
import { useFormik } from 'formik';
import * as Yup from 'yup';
function SignUp()
{

function SignUpApi(values)
{
    console.log("Sign up api is called", values.Fullname, values.Email, values.newPassword, values.Password )
}

const signUpSchema = Yup.object().shape({
    Fullname: Yup.string().min(4).max(15).required(),
    Email: Yup.string().email().required(),
    newPassword: Yup.string().min(8).max(15).required(),
    Password: Yup.string().oneOf([Yup.ref('newPassword'),null],'Password must match').required(),
})

const { handleSubmit, handleBlur, handleChange,values , errors, touched} = useFormik({
    initialValues: {
        Fullname: " ",
        Email: " ",
        newPassword: " ",
        Password: " "
    },
    onSubmit: SignUpApi ,
    validationSchema: signUpSchema ,
    validateOnMount:true,
    
})


    return (
        <div className="flex flex-col h-screen justify-center items-center w-full">
            <h1>This one is with the use of useFormik</h1>
            <form onSubmit={handleSubmit} className="w-80 bg-orange-100 shadow-transparent"> 
            <div >
                <h1 className=" text-blue-400">This is a Sign up form</h1>
                    <Input value={ values.Fullname } id="fullname" name="Fullname" onChange={ handleChange } onBlur={ handleBlur } touched={ touched.Fullname } error={errors.Fullname } />
            
            </div>
            </form>    
            <Link to={"/"} ><Button >Go Back</Button></Link>
        </div>
    );
}

export default SignUp;