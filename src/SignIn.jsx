import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FieldInput from "./FieldInput";

function SignIn() {
  function callSignIn(initialValues) {
    console.log(
      "callSignIn called",
      initialValues.email,
      initialValues.password
    );
  }

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(15).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div>
        {" "}
        <h1>This one is with the use of Formik and useField</h1>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={callSignIn}
        validationSchema={SignInSchema}
        validateOnMount
      >
        <Form className="bg-slate-100 flex flex-col gap-2 px-2 py-4 shadow-lg w-80">
          <h1>This is a sign in form</h1>
          <FieldInput
            label="Email-Address"
            id="mail"
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-b-none"
            placeholder="Email Address"
            required
          />
          <FieldInput
            label="Password"
            id="pswd"
            name="password"
            type="password"
            autoComplete="Current-pasword"
            className="rounded-t-none"
            placeholder="Enter Password"
            required
          />
          <Link className="mt-4" to={"/"}>
            <Button>Go Back</Button>
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;
