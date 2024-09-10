import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <div>
        <h1>Header app</h1>
        <Outlet />
      </div>
    </>
  );
}
