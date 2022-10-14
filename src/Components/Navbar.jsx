import React from "react";
import { Link } from "react-router-dom";

const links=[
  {path:"/",title:"Home"},
  {path:"/login",title:"Login"},
  {path:"/sellcategories",title:"Sell"},
]

const Navbar = () => {
  return <div style={{display:"flex", justifyContent:"flex-end",backgroundColor:"pink"}}>
       {links.map((link)=>(
          <div style={{margin:"10px", color:"black",fontSize:"18px"}}>
           <Link key={link.path} to={link.path}>{link.title}</Link>
         </div>

       ))}
  </div>;
};

export default Navbar;