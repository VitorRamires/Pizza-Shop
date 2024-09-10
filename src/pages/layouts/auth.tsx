import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <h1>Header auth</h1>
      <Outlet />
    </>
  );
}
