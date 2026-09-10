import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import Feed from "./Pages/Feed";

const router = createBrowserRouter([
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "/posts",
    element: <Feed />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
