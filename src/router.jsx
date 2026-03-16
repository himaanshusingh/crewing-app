import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Company from "./pages/Company";
import Crew from "./pages/Crew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup/:person", element: <Signup /> },
    ],
  },
  {
    path: "/login-company",
    element: <Company />,
  },
  {
    path: "/login-crew",
    element: <Crew />,
  },
]);

export default router;
