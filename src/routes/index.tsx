import { Routes } from "react-router";
import { authRoutes } from "./authRoutes";
import { mainRoutes } from "./mainRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {authRoutes}
      {mainRoutes}
    </Routes>
  );
};
