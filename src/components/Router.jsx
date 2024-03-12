import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Plans from "./Plans";
import Form from "./Form";
import Delete from "./Delete";
import PdfGenerator from "./PdfGenerator";
import NotFound from "./NotFound";

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
        {
          path: "new",
          element: <Form />,
        },
        {
          path: "edit/:id",
          element: <Form />,
        },
        {
          path: "delete/:id",
          element: <Delete />,
        },
        {
          path: "print/:id",
          element: <PdfGenerator />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
