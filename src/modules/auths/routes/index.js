import React from "react";
import ForgotPassword from "../views/forgotpassword";
import SignIn from "../views/signin";
import SignUp from "../views/signup";
import { Route, Routes, Navigate } from "react-router-dom";
import BufferLayout from "../../../layout/shared";


export const routes = [
  { path: "signin", element: <SignIn /> },
  { path: "signup", element: <SignUp /> },
  { path: "forgot-password", element: <ForgotPassword /> },

];

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BufferLayout />}>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        {routes.map((item) => (
          <Route key={item?.path} path={item.path} element={item.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
