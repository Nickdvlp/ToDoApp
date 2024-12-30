import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./input.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/header",
    element: <Header />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute}>
      <App />
    </RouterProvider>
  </StrictMode>
);
