import { FaPhoneAlt, FaEnvelopeOpen, FaLocationArrow } from "react-icons/fa";


const NavTopBar = () => {
  return(<>
  <div className="w-9/12 h-10 text-white flex justify-between xs:w-full xs:justify-evenly xs:text-[8px] ipad:justify-evenly ipad:w-full ipad:text-sm">

    <div className="flex items-center space-x-3 ipad:space-x-1">
        <FaPhoneAlt className="text-red-500"/>
        <h1>+1 (631) 265-1304</h1>
    </div>

    <div className="flex items-center space-x-3 ipad:space-x-1">
        <FaEnvelopeOpen className="text-red-500"/>
        <h1>shoper@mail.com</h1>
    </div>

    <div className="flex items-center space-x-3 ipad:space-x-1">
        <FaLocationArrow className="text-red-500"/>
        <h1>730 Smithtown Bypass</h1>
    </div>
  </div>
  
  </>)
}

export default NavTopBar