import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import { ContextProvider } from './contexts/AppContext';
import Home from './pages/Home';
import Product from "./pages/Product";
import PersonalProducts from "./pages/PersonalProducts";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/personal-products",
    element: <PersonalProducts />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
