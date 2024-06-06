import { Navigate, Outlet } from "react-router-dom";
import { localStorageGetter } from "../utils/localStorage";

export const Protected = () => {
    const auth = localStorageGetter('Auth');
  
    if (auth) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };