import React from "react";

//This is a simple customized Input component although it is not much good but this is only for the sample of work of UseFormik
//have use this for only to show the work of useFromik

//give only that value specifically which has some other use apart from input tag
function Input({ id, label, touched, error, className, ...rest }) {
  let errorClass = "border-blue-500 ";
  if (touched && error) {
    errorClass = "border-red-800";
  } //This is the conditioning class for the input field

  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {" "}
        {/*here sr-only used just only for the accessibility of screen  reader */}
        {label}
      </label>
      <input
        id={id}
        className={
          "relative block w-full px-3 py-2  text-gray-900 placeholder-gray-500 border-2 appearance-none rounded-md focus:z-10  focus:outline-none focus:ring-primary-default sm:text-sm" +
          " " +
          errorClass +
          " " +
          className
        }
        {...rest}
      />
      {touched && error && <div className="text-xs text-red-800">{error}</div>}{" "}
      {/*this is the field to show the errors of user while flling the form */}
    </div>
  );
}

export default Input;
