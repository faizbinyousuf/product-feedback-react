import Layout from "./components/common/Layout";
import HomePage from "./app/home/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        // {
        //   path: "/home",
        //   element: <HomePage />,
        // },
        // {
        //   path: "/noteDetail/:id",
        //   element: <NoteDetail />,

        //   errorElement: <div>Note not found!</div>,
        // },
        // {
        //   path: "/createNote",
        //   element: <CreateNote />,
        // },
        // {
        //   path: "/archived",
        //   element: <Archived />,
        // },
        // {
        //   path: "/settings",
        //   element: <SettingsPage />,
        // },

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
          {/* <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme-2"> */}
          {/* <FontProvider> */}
          {/* <NotesContextProvider> */}
          <RouterProvider router={router} />
          {/* </NotesContextProvider> */}
          {/* </FontProvider> */}
          {/* </ThemeProvider> */}
        </React.StrictMode>
      </>
    </>
  );
}

export default App;
