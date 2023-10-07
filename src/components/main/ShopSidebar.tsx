import { Link } from "react-router-dom"


function ShopSidebar() {
  return (
        <div className="w-[15%] mt-5 border-r-2 flex flex-col h-max border-b-2 xs:w-[25%]">
        <div className="flex items-center">
        <hr className="flex-grow border-t border-gray-300" /> 
        <span className="px-3 text-gray-500 hover:text-red-400 xs:px-2">Categories
        </span> 
        <hr className="flex-grow border-t border-gray-300" />
        </div>
        <ul className="w-max items-start ml-10 pb-5 xs:ml-2">
            <Link to="/shop/"><li className="py-2 mt-2 relative after:bg-red-400 after:absolute after:h-1 after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-3/6 after:transition-all after:duration-300 cursor-pointer">Men</li></Link>
            <Link to="/shop/women"><li className="py-2 relative after:bg-red-400 after:absolute after:h-1 after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-3/6 after:transition-all after:duration-300 cursor-pointer">Women</li></Link>
            <Link to="/shop/electronics"><li className="py-2 relative after:bg-red-400 after:absolute after:h-1 after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-3/6 after:transition-all after:duration-300 cursor-pointer">Electronics</li></Link>
            <Link to="/shop/jewelry"> <li className="py-2 relative after:bg-red-400 after:absolute after:h-1 after:rounded-xl after:w-0 after:bottom-0 after:left-0 hover:after:w-3/6 after:transition-all after:duration-300 cursor-pointer">Jewelery</li></Link>
        </ul>
    </div>
  )
}

export default ShopSidebar