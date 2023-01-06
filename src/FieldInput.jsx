import { useField } from "formik";
import React from "react";

function FieldInput({ name, id, label, className, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onChange, onBlur } = data;
  const { touched, error } = meta;

  let errorClass = "border-blue-500";
  if (touched && error) {
    errorClass = "border-red-700";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {" "}
        {label}{" "}
      </label>
      <input
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={
          "relative block w-full px-3 py-2  text-gray-900 placeholder-gray-500 border-2 appearance-none rounded-md focus:z-10  focus:outline-none focus:ring-primary-default sm:text-sm" +
          " " +
          errorClass +
          " " +
          className
        }
        {...rest}
      />
      {touched && error && (<div className="text-xs text-red-700">{error}</div>)}
    </div>
  );
}

export default FieldInput;
