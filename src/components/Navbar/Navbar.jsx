import { NavLink } from "react-router-dom"

import "./Navbar.css"

function Navbar() {
    return(
       <div className="navbar">
        <NavLink to="/">Home</NavLink>
<NavLink to ='/posts'>Posts</NavLink>
<NavLink to ='/comments'>Comments</NavLink>
<NavLink to="/photos">Photos</NavLink>
<NavLink to='/users'>Users</NavLink>
       </div> 
    )
}

export default Navbar