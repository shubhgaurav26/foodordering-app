import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
// import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appstore";
import Cart from "./components/Cart";

// App layout with Header and Body
const AppLayout = () => {

  return (
    <Provider store ={appStore}>
    <div className="bg-pink-50 min-h-screen">
      <Header />
      <Outlet />
      </div> 
       </Provider>
   
  ); 
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart/> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
