import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Plans from "./Plans";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "plans",
          element: <Plans />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
