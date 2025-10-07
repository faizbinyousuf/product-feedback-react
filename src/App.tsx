import Layout from "./components/common/Layout";
import HomePage from "./app/home/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FeedbackDetail from "./app/home/FeedbackDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div>
          <h1>404</h1>
          <p>Page not found.</p>
        </div>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/feedback-detail",
          element: <FeedbackDetail />,
        },

        {
          path: "*",
          element: <div>404 NOT FOUND</div>,
        },
      ],
    },
  ]);

  return (
    <>
      <>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </>
    </>
  );
}

export default App;
