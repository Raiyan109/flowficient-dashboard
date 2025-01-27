import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import Main from "../layouts/MainLayout/Main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Signin />,
            },
        ]
        // children: routesGenerators(dashboardItems),
    },
    //   {
    //     path: "/support-chat",
    //     element: <ChatPage />
    //   },
    //   {
    //     path: "/change-password",
    //     element: <ChangePassword />
    //   },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth",
                element: <Navigate to={"/auth/sign-in"} />,
            },
            {
                path: "/auth/sign-in",
                element: <Signin />,
            },
            {
                path: "/auth/sign-up",
                element: <Signup />,
            },
            // {
            //     path: "/auth/forgot-password",
            //     element: <ForgotPassword />,
            // },
            // {
            //     path: "/auth/verify-email",
            //     element: <VerifyEmail />,
            // },
            // {
            //     path: "/auth/reset-password",
            //     element: <ResetPassword />,
            // },
        ],
    },
    {
        path: "*",
        //   element: <NotFound />,
    },
]);

export default router;