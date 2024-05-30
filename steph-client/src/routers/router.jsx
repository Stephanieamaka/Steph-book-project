import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import Shop from "../components/shop/Shop";
import SingleBook from "../components/shop/SingleBook";
import { useEffect } from "react";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
          },
          {
            path: "/shop",
            element: <Shop/>,
          },
          {
            path: "/about",
            element: <About/>
          },
          {
            path: "/blog",
            element: <Blog/>
          },
          {
            path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
  ]);
  export  default router;