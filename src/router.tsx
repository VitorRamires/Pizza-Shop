import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/1 - layout/appLayout";
import { Dashboard } from "./pages/app_pages/dashboard";
import { AuthLayout } from "./pages/1 - layout/authLayout";
import { Signin } from "./pages/auth/Signin";

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
