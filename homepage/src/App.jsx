import React from 'react';
import Login from './components/Login.jsx';
import LoginSignup from './components/LoginSignup.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BusRouteForm from './BusRouteForm.jsx';
import Location from './Location/Location.jsx';
import Home from "./Home.jsx";
const router = createBrowserRouter([
  {
    path: "/dist",
    element: <Login />,
  },
  {
    path: "/dist/Home",
    element: <Home />
  },
  {
    path: "/dist/Register",
    element: <LoginSignup />,
  },
  {
    path: "/dist/FromTo",
    element : <BusRouteForm />,
  },
  {
    path: "/dist/location",
    element : <Location />,
  },

]);

export default function App() {
  return (
    <div><RouterProvider router={router} /></div>
  )
}
//import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
//import BusRouteForm from './BusRouteForm';
//import Location from './Location';
//import BusList from './abc/BusList';
//import LoginSignup from './components/LoginSignup/LoginSignup';