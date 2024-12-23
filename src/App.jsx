import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from "./components/About";


// App layout with Header and Body
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>

          
        </div>
    );
};

// Define routes using the new createBrowserRouter API
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact", 
                element: <Contact />,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,

            },
             
        ],
        errorElement : <Error/>
    },
   
    
]);

// Get the root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
