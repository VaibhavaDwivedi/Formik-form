import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Forms from "./Forms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <h1 className="text-sm font-bold text-center text-red-500">
        This is an app of Forms sample with use of useFormik, Formik and
        UseField for validation used Yup
      </h1>
      <div>
        <Routes>
          <Route index element={<Forms />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
