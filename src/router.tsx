import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "./Auth/Login/Login";
import { Layout } from "./Layout/Layout";
import NoPageFound from "./Pages/NoPageFound/NoPageFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "dashboard",
                async lazy() {
                    // Multiple routes in lazy file
                    let { DashboardLayout } = await import("./Pages/Dashboard/Dashboard");
                    return { Component: DashboardLayout };
                },
                children: [
                    {
                        index: true,
                        async lazy() {
                            let { DashboardIndex } = await import("./Pages/Dashboard/Dashboard");
                            return { Component: DashboardIndex };
                        },
                    },
                    {
                        path: "messages",
                        async lazy() {
                            let { dashboardMessagesLoader, DashboardMessages } = await import(
                                "./Pages/Dashboard/Dashboard"
                            );
                            return {
                                loader: dashboardMessagesLoader,
                                Component: DashboardMessages,
                            };
                        },
                    },
                ],
            },
            {
                path: "*",
                element: <NoPageFound />,
            },
        ],
    },
]);

export default router
