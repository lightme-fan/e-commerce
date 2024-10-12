import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import { ContextProvider } from './contexts/AppContext';
import { Contact, Home, Login, NewProduct, PersonalProducts, Product, Signup } from "./pages";


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
    path: "/new_product",
    element: <NewProduct />,
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
