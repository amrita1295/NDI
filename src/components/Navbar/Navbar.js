import React from "react";
import func from "../../images/func1.png"
import "../Navbar/Navbar.css"
const Navbar = () => {
    return (
        <div className="navbar  bg-[#FBF8F0]">
            <a className=" normal-case text-xl">
                <img src={func} alt="" className="h-24 w-28 ml-3"/>
            </a>
        </div>



    )
}
export default Navbar