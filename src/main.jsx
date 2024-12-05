import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from "./Layout/App";
import { AuthProvider } from "./providers/AuthProvider";
import Home from "./pages/Home/Home";
import Visas from "./pages/Visas/Visas";
import AddVisa from "./pages/AddVisa/AddVisa";
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader:() => fetch('http://localhost:8080/addVisa')
      },
      {
        path:"/signin",
        element:<SignIn />
      },
      {
        path:"/signup",
        element:<SignUp />
      },
      {
        path:"/allVisas",
        element:<Visas />,
        loader:()=>fetch('http://localhost:8080/addVisa')
      },
      {
        path:"addVisa",
        element:<PrivateRoute>
          <AddVisa />
        </PrivateRoute>
      }
      
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
