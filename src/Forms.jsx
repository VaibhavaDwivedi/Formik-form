import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Forms() {
  return (
    <>
      <div className="flex flex-row space-x-4 justify-center items-center h-screen">
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
