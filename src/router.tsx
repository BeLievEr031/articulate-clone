import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "blogs",
                element: <Blog />
            },
        ]
    }
])

export default router;