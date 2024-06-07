import { RouterProvider } from "react-router-dom";
import { AuthPage } from "./pages/auth/AuthPage";
import { router } from "./routes/Router";

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
