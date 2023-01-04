import React, { memo } from "react";

function Button({ className, ...rest }) {
  return (
    <button
      className={
        "bg-blue-300 px-3 py-2 text-white rounded-md active:scale-110" +
        " " +
        className
      }
      {...rest}
    ></button>
  );
}

export default memo(Button);
