import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Team from "./Team";
import Events from "./Events";
import Contact from "./Contact"; 
import Footer from "./Footer";


const Layout = () => (
  <div className="w-screen min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer/>
  </div>
);


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "about", element: <About /> },
      { path: "team", element: <Team /> },
      { path: "events", element: <Events /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);


const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
