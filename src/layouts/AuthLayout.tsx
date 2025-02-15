import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex flex-row justify-center overflow-auto h-full p-6">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
