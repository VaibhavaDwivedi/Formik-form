import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Input from "./Input";
import { useFormik } from "formik";
import * as Yup from "yup";
function SignUp() {
  function SignUpApi(values) {
    console.log(
      "Sign up api is called",
      values.fullname,
      values.email,
      values.newPassword,
      values.currentPassword
    );
  }

  const signUpSchema = Yup.object().shape({
    fullname: Yup.string().min(4).max(15).required(),
    email: Yup.string().email().required(),
    newPassword: Yup.string()
      .min(8, "Password must be of min 8 length")
      .max(15)
      .required(),
    currentPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required(),
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      newPassword: "",
      currentPassword: "", //never give space in this else it will create error
    },
    onSubmit: SignUpApi,
    validationSchema: signUpSchema,
    validateOnMount: true,
  });

  return (
    <div className="flex flex-col h-screen justify-center items-center w-full">
      <h1>This one is with the use of useFormik</h1>
      <form
        onSubmit={handleSubmit}
        className="w-80 p-4 flex flex-col gap-2 bg-slate-100 shadow-transparent"
      >
        <h1 className=" text-blue-400">This is a Sign up form</h1>
        <Input
          value={values.fullname}
          id="name"
          type="text"
          name="fullname"
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.fullname}
          error={errors.fullname}
          autoComplete="Full name"
          placeholder="Enter Full Name"
          required
        />
        <Input
          id="email-address"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          touched={touched.email}
          error={errors.email}
          autoComplete="email"
          placeholder="Email Address"
          required
        />
        <Input
          value={values.newPassword}
          id="newPswd"
          type="password"
          name="newPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.newPassword}
          error={errors.newPassword}
          autoComplete="new-password"
          placeholder="Create a new Password"
          required
        />
        <Input
          value={values.currentPassword}
          id="Pswd"
          type="password"
          name="currentPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.currentPassword}
          error={errors.currentPassword}
          autoComplete="new-password"
          placeholder="Re-enter the new Password"
          required
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="self-center"
          disabled={!isValid}
        >
          SignUp
        </Button>
        <div className="flex flex-row justify-between">
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>

          {/*this reset link is not working need to check this */}
          <Button onClick={resetForm} type="button">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
