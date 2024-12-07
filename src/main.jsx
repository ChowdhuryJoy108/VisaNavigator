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
import SeeDetails from "./pages/SeeDetails/SeeDetails";
import MyAddedVisas from "./pages/MyAddedVisas/MyAddedVisas";
import MyvisaApplications from "./pages/MyVisaApplications/MyvisaApplications";

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
      },
      {
        path:"details/:id",
        element:<PrivateRoute>
          <SeeDetails />
        </PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:8080/addVisa/${params.id}`)
      },
      {
        path:'myAddedVisas',
        element:<PrivateRoute>
          <MyAddedVisas />
        </PrivateRoute>,
        loader:()=>fetch('http://localhost:8080/addVisa'),
      },
      {
        path:'myVisaApplications',
        element:<PrivateRoute> 
          <MyvisaApplications />
        </PrivateRoute>,
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
