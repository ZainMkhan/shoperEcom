import CartCard from "../components/main/CartCard";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Data from "../data/Data";
import CartEmptyScreen from "../components/main/CartEmptyScreen";
import { Link } from "react-router-dom";

function Cart() {

  let {cartItem} = useShoppingCart();
  let storeItems = [...Data()];

  return (<>
  <div className="w-full  bg-slate-100 min-h-screen flex items-center flex-col select-none">
      <h1 className="bg-red-400 text-white font-bold text-2xl mt-4 p-4 w-full text-center">Shopping Cart</h1>
      <div className=" w-11/12 mt-5 mb-5   flex flex-col gap-4 p-4">
              <div className="w-full flex border-b-2 pb-4 font-bold text-lg border-black xs:text-[15px]">
                <h1 className="w-[40%]">Products</h1>  
                <h1 className="w-[20%] text-center">Price</h1>  
                <h1 className="w-[20%] text-center">Quantity</h1>  
                <h1 className="w-[20%] text-end">Total</h1>  
              </div> 
              {cartItem.length === 0 ? 
                <div className="mt-5"></div>
               : cartItem.map(item =>(
                <CartCard key={item.id} {...item} />
              ))}

              {cartItem.length === 0 ? <CartEmptyScreen/> :                 
                <div className="w-full flex flex-wrap h-[200px] mt-10">
                <div className=" w-[50%] flex justify-center xs:justify-start">
                    <div className="w-[50%] xs:w-full">
                      <h1 className="text-xl xs:text-base">Add Order Note</h1>
                      <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 xs:w-11/12" placeholder="Your message..."></textarea>
                    </div>
                </div>
                <div className="w-[50%] flex flex-col items-end">
                    <h1 className="font-bold text-2xl xs:text-base xs:flex xs:justify-end ">
                     Subtotal  : ${cartItem.reduce((total, cartItem) =>{
                        const item = storeItems.find(i => i.id === cartItem.id)
                        const discountedPrice = (item?.price || 0 ) - parseFloat(((item?.price || 0 ) * 0.1).toFixed(2));
                        return parseFloat((total + discountedPrice * cartItem.qty).toFixed(3));
                      }, 0)}
                     </h1>
                    <h2 className="text-gray-600 py-2 xs:text-[10px]">*Tax and Shipping is included</h2>
                    <Link to="/order-placed" className="bg-red-600 p-5 font-bold rounded-3xl text-white w-[40%] text-lg hover:bg-red-700 scale-105 shadow-2xl border border-red-900 xs:py-3 xs:text-base xs:w-11/12"><button className="text-center w-full">Place Order</button></Link>
                </div>
                <div className=" w-[50%] flex justify-center xs:justify-start xs:flex-col">
                    <div className="w-[50%] flex items-center gap-4 xs:gap-2">
                      <h1 className="text-xl xs:text-base">Coupon: </h1>
                      <input type="text" className=" h-max border-gray-300 border rounded-md p-2 xs:px-1" placeholder="ZAINWEB..." />
                    </div>
                </div>
                </div>}


      </div>
  </div>
  
  </>)

}

export default Cart