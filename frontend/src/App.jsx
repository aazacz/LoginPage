import { useEffect, useState } from "react";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import LoginSection from "./Components/Login/LoginSection";
import AdminLogin from "./Components/Admin/AdminLogin";
import Dashboard from "./Components/Pages/Dashboard";
import UserDetails from "./Components/UserDetails";
import Create from "./Components/Create/Create"
import UserDashboard from "./Components/Pages/UserDashboard";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import UserDashboardDefault from "./Components/Pages/UserDashboardDefault";
import Profile from "./Components/profile/Profile";
import UpdateUser from "./Components/UpdateUserAdmin/UpdateUser";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSection />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
   },
  {
    path: "/dashboard",
    element:<Dashboard/>,
        children: [ { index: true, element: <UserDetails /> }, 
        { path: "create",
          element: <Create/>,
        },
        { path: "update",
        element: <UpdateUser/>,
      }],
  },
  {
    path: "/UserDashboard",
    element:<UserDashboard/>,
        children: [ { index: true, element: <UserDashboardDefault/> }, 
                    { path: "create", element: <Profile/>,       }
                  ],
  }
]);

 


function App() {
  const [count, setCount] = useState(0);
  const [data, SetData] = useState();

  return (
    <>
    <RouterProvider router={router} />
    </>
 
  );
}

export default App;
