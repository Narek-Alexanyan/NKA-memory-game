import { Route } from "react-router";
import MainLayout from "../layouts/MainLayout";

export const mainRoutes = (
  <Route element={<MainLayout />}>
    <Route index element={<div>Dashboard</div>} />
  </Route>
);
