// import LazyLoad from "@/components/LazyLoad";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Homepage from "../pages/Homepage/Homepage";
import Foods from "../pages/Foods/Foods";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import NotFound from "../pages/NotFound";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetail from "../pages/RecipeDetail/RecipeDetail";
import AddNewRecipe from "../pages/AddNewRecipe/AddNewRecipe";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/Foods", element: <Foods /> },
      { path: "/Recipes", element: <Recipes /> },
      { path: "Recipes/:idRecipes", element: <RecipeDetail /> },
      { path: "/AddRecipes", element: <AddNewRecipe /> },
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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routers;
