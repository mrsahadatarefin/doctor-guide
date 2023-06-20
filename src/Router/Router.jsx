import { createBrowserRouter } from "react-router-dom";
import MainComponents from "../Layout/MainComponents";
import Home from "../components/Home/Home";


export const router = createBrowserRouter([
{ path:'/',
element:<MainComponents/>,
 children:[
    { path:'/',
    element:<Home></Home>
  }
 ]

}
])