import { NavLink, Outlet } from "react-router-dom";

export default function Layout(){

return(
    <>
    <h2 style={{textAlign:"center"}}><NavLink to='/'>Home</NavLink></h2>
    <Outlet></Outlet>
    </>
)


}