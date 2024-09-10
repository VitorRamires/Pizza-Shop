import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <h1>Header app</h1>
      <Outlet />
    </>
  );
}
