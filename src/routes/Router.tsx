import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages/auth/AuthPage";
import { Protected } from "./Protected";
import { HomePage } from "../pages/home/HomePage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Protected/>,
        children:[
            {path:'/home',
                element:<HomePage/>
            }
        ]
    },
    {path:"/login",
        element:<AuthPage/>
    }
])

