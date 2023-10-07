import { Link } from "react-router-dom"


function Categories() {
  return(<>
  <div className="w-5/6 flex flex-col mt-5 border-b-2 pb-6 select-none xs:pb-20 ipad:pb-20">
    <div className="w-full flex justify-evenly text-2xl items-center">
    <hr className="flex-grow border-t border-gray-300" /> 
        <span className="px-3 text-gray-500 hover:text-red-400 xs:text-base"> 
            Shop in Categories
        </span> 
        <hr className="flex-grow border-t border-gray-300" />
    </div>
    <div className="w-full mt-6 text-black h-10 flex justify-evenly ">
    <ul className="flex justify-evenly w-full xs:flex-wrap xs:w-[90%] xs:gap-4 ipad:flex-wrap ipad:gap-5">
      <Link to="/shop/">
      <li className=" text-3xl relative after:bg-red-400 after:absolute after:h-1 after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer xs:text-[25px] ipad:text-3lg">Men</li>
      </Link>
      <Link to="/shop/women">
      <li className=" text-3xl relative after:bg-red-400 after:absolute after:h-1  after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer xs:text-[25px] ipad:text-3lg" >Women</li>
      </Link>
      <Link to="/shop/jewelry">
      <li className=" text-3xl relative after:bg-red-400 after:absolute after:h-1 after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer xs:text-[25px] ipad:text-3lg">Jewelery</li>
      </Link>
      <Link to="/shop/electronics">
        
      <li className=" text-3xl relative after:bg-red-400 after:absolute after:h-1 after:w-0 after:rounded-xl after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer xs:text-[25px] ipad:text-3lg">Electronics</li>
      </Link>
    </ul>
  </div>
  </div>
    
  </>)
}

export default Categories