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
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MyVisaApplications from "./pages/MyVisaApplications/MyvisaApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader:() => fetch('https://visa-navigator-server-wheat.vercel.app/addVisa')
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
        loader:()=>fetch('https://visa-navigator-server-wheat.vercel.app/addVisa')
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
        loader:({params})=>fetch(`https://visa-navigator-server-wheat.vercel.app/addVisa/${params.id}`)
      },
      {
        path:'myAddedVisas',
        element:<PrivateRoute>
          <MyAddedVisas />
        </PrivateRoute>,
        loader:()=>fetch('https://visa-navigator-server-wheat.vercel.app/addVisa'),
      },
      {
        path:'myVisaApplications',
        element:<PrivateRoute> 
          <MyVisaApplications />
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
