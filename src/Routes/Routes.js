import Login from "../Pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: SignUp } = require("../Pages/SignUp/SignUp");

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
