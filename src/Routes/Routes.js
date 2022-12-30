import Aboute from "../AllComponet/About/Aboute"
import AbuteEdit from "../AllComponet/About/AbuteEdit"
import Details from "../AllComponet/Details"
import Login from "../AllComponet/Athentication/Login"
import Medias from "../AllComponet/Medias"
import Register from "../AllComponet/Athentication/Register"
import PrivateRoute from "./PrivateRoute"
import ErrorPage from "../AllComponet/ErrorPage"

const { createBrowserRouter } = require("react-router-dom")

const { default: Home } = require("../AllComponet/Home/Home")
const { default: Main } = require("../AllComponet/Main")


    const router = createBrowserRouter([
{
path:'/',
element:<Main></Main>,
errorElement:<ErrorPage></ErrorPage>,
children:[
    {
        path:'/',
        loader:async()=>await fetch("http://localhost:5000/imgShowsT"),
        element:<Home></Home>
    },
    {
     path:"/media",
     loader:async()=>await fetch("http://localhost:5000/imgShowsText"),
     element:<Medias></Medias>   
    },
    {
        path:"/details",
        loader:async()=>await fetch("http://localhost:5000/imgShowsText"),
        element:<PrivateRoute><Details></Details></PrivateRoute>
    },

    {
        path:'/login',
        element:<Login></Login>

    },
   
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/aboute',
        loader:async()=>await fetch("http://localhost:5000/about"),
        element:<Aboute></Aboute>
        
    },
    {
        path:'/aboutEdit',
        loader:async()=>await fetch("http://localhost:5000/about"),
        element:<AbuteEdit></AbuteEdit>
    },

   

]

}



    ])
 
    export default router;