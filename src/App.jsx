import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";
import Signup from "./screens/Signup";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Loading /> },
    { path: "/login", element: <Login /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/signup", element: <Signup /> },
  ]);
  return <RouterProvider router={router} />;
}
