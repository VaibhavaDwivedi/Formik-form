import React from "react";

//This is a simple customized Input component although it is not much good but this is only for the sample of work of UseFormik
//have use this for only to show the work of useFromik

function Input({
  values,
  id,
  label,
  name,
  type,
  onChange,
  onBlur,
  placeholder,
  required,
  touched,
  error,
  className,
}) {
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
        value={values}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className={
          "w-full rounded-md outline-none" + " " + errorClass + " " + className
        }
      />
      {touched && error && <div className="text-xs text-red-800">{error}</div>}{" "}
      {/*this is the field to show the errors of user while flling the form */}
    </div>
  );
}

export default Input;
