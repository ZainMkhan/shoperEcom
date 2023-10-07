import NavTopBar from "./NavTopBar"
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";
import { useRef, useEffect } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Navbar = () => {
  let {cartQty} = useShoppingCart();
  let navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const navStyle = navRef?.current;
      if (window.scrollY > 0) {
        navStyle?.classList.add("sticky", "top-0", "z-50");
      } else {
        navStyle?.classList.remove("sticky", "top-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (<>
    <div className="w-full bg-zinc-800 flex justify-center xs:justify-evenly xs:text-xs">
    <NavTopBar />
    </div>
    <div className="w-full bg-stone-900 h-20 flex justify-center items-center" ref={navRef}>
    <div className="w-9/12 flex items-center justify-between xs:w-full ">
      <div className="text-white">
            <h1 className="text-3xl select-none xs:text-md xs:ml-2">Shop<span className="text-red-400">er</span></h1>
          </div>
          <div className="text-white flex w-5/12 text-2xl justify-between items-center cursor-pointer select-none xs:w-max xs:text-sm xs:gap-4 xs:mr-5">
            <Link to="/" >Home</Link>
            <Link to="/shop" >Shop</Link>
           <Link to="/cart">
           <div className="flex items-center space-x-1  ">
            <h1 className="flex items-center"><FaShoppingCart className="text-white"/>
            {cartQty === 0 ? 
            <span className="relative top-[-10px] w-4 text-center text-xs bg-red-700 rounded-xl invisible xs:absolute">{cartQty}</span> 
            : 
            <span className="relative top-[-10px] w-4 text-center text-xs bg-red-700 rounded-xl font-bold ">{cartQty}</span>
            }
            </h1>
            <h1>Cart</h1>
            </div>
           </Link>
          </div>
      </div>
    </div>
  </>)
}

export default Navbar