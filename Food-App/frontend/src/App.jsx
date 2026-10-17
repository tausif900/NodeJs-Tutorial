import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserRegistration from "./Components/Authentication/UserRegistration";
import UserLogin from "./Components/Authentication/UserLogin";
import FoodPartnerRegistration from "./Components/Authentication/FoodPartnerRegistration";
import FoodPartnerLogin from "./Components/Authentication/FoodPArtnerLogin";

const router = createBrowserRouter([
  {
    path: "/user-registration",
    element: <UserRegistration />,
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
  {
    path: "/food-partner-registration",
    element: <FoodPartnerRegistration />,
  },
  {
    path: "/food-partner-login",
    element: <FoodPartnerLogin />,
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
