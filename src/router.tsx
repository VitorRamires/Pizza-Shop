import { Signin } from "./pages/auth/signin";
import { Dashboard } from "./pages/dashboard/dashboard";
import { AppLayout } from "./pages/layouts/app";
import { AuthLayout } from "./pages/layouts/auth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/signin", element: <Signin /> }],
  },
]);
