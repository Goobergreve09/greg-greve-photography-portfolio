import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing components and styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";


// Importing pages
import App from "./App";
import Error from "./pages/Error";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery"
import About from "./pages/About"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        path: "/",
        element: <Home />, 
      },
      {
      path:"/Gallery",
      element: <Gallery />,
      },
      {
      path:"/About",
      element: <About />,
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
