import { Route } from "react-router";
import AuthLayout from "../layouts/AuthLayout";

export const authRoutes = (
  <Route element={<AuthLayout />}>
    <Route path="/login" element={<div>Login</div>} />
    <Route path="/register" element={<div>Register</div>} />
  </Route>
);
