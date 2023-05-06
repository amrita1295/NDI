import React from "react";
import func from "../../images/func1.png"
import "../Navbar/Navbar.css"
const Navbar = () => {
    return (
        <div className="navbar  bg-[#FBF8F0]">
            <a className="btn btn-ghost normal-case text-xl">
                <img src={func} alt="" className="h-15 w-28 "/>
            </a>
        </div>



    )
}
export default Navbar