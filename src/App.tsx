import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
      <Toaster richColors/>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}
