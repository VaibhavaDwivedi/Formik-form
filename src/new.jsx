import { useFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";

function newForm() {
  function callLoginApi(values) {
    console.log("call login api called", values.email, values.pswd);
  }
  // object, number, string
  //{email: vghv@gmail.com, pswd: "123456"}
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    pswd: Yup.string().min(8).max(10).required(),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    resetForm,
    errors,
    handleBlur,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      pswd: "",
    },
    onSubmit: callLoginApi,
    validationSchema: loginSchema,
  });
  console.log("dirty is", dirty);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-80"
      >
        <h1 className="self-center mb-4 text-2xl font-bold">Login to Shop</h1>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            id="email-address"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-primary-default focus:outline-none focus:ring-primary-default sm:text-sm"
            placeholder="Email Address"
          />
          {touched.email && errors.email && (
            <div className="text-red-700 text-xs">{errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.pswd}
            id="password"
            type="password"
            autoComplete="current-password"
            name="pswd"
            required
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:z-10 focus:border-primary-default focus:outline-none focus:ring-primary-default sm:text-sm"
            placeholder="Password"
          />
          {touched.pswd && errors.pswd && (
            <div className="text-red-700 text-xs">{errors.pswd}</div>
          )}
        </div>

        <Button
          onClick={resetForm}
          type="button"
          className="self-start px-2 py-2 mt-3 text-white rounded-md bg-primary-default"
        >
          Reset
        </Button>
      </form>
    </div>
  );
}

export default newForm;
