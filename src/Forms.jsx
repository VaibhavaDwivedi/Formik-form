import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import NewForm from "./new";

function Forms() {
  return (
    <>
      <div className="flex flex-row space-x-4 justify-center items-center h-screen">
        <NewForm />
        <Link to={"/SignIn"}>
          <Button>SignIn</Button>
        </Link>
        <Link to={"/SignUp"}>
          <Button>SignUp</Button>
        </Link>
      </div>
    </>
  );
}

export default Forms;
