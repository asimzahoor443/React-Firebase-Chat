import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Loading /> },
    { path: "/login", element: <Login /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}
