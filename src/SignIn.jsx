import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1>This one is with the use of Formik and useField</h1>
      <div className="bg-green-400 shadow-lg w-80">
        <h1>This is a sign in form</h1>
      </div>
      <Link to={"/"}>
        <Button>Go Back</Button>
      </Link>
    </div>
  );
}

export default SignIn;
