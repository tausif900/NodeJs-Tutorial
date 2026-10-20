import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserRegistration from "./Components/Pages/Authentication/UserRegistration";
import UserLogin from "./Components/Pages/Authentication/UserLogin";
import FoodPartnerRegistration from "./Components/Pages/Authentication/FoodPartnerRegistration";
import FoodPartnerLogin from "./Components/Pages/Authentication/FoodPartnerLogin";
import Home from "./Components/Pages/general/Home";
import AddFood from "./Components/Pages/general/AddFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
  {
    path: "/add-food-items",
    element: <AddFood />,
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
