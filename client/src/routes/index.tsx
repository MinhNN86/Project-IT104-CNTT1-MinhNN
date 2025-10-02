// import LazyLoad from "@/components/LazyLoad";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Homepage from "../pages/Homepage/Homepage";
import Ingredient from "../pages/Ingredient/Ingredient";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/Ingredient", element: <Ingredient /> },
    ],
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
]);

export default routers;
