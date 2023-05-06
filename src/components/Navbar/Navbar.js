import React from "react";
import func from "../../images/func1.png"
import "../Navbar/Navbar.css"
const Navbar=()=>{
return (
    
<nav class="bg-[#FBF8F0] border-gray-200 dark:bg-gray-900 h-14 -mt-5">
  <div class="max-w-screen-xl  p-10 ">
    <a href="https://ndi.myfunc.in/" class="flex items-center">
        <img src={func} className="h-15 w-28 mr-3 pic" alt="MyFunc Logo "  />
    </a>
    
  </div>
</nav>

)
}
export default Navbar