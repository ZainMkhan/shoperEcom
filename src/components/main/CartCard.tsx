import { FaTrashAlt } from "react-icons/fa";
import Data from "../../data/Data";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartItemProps = {
    id: number
    qty : number
}

function CartCard( {id, qty}:CartItemProps) {
    let {removeItem} = useShoppingCart();
    let storeItems = [...Data()];

    const item = storeItems ? storeItems.find(i => i.id === id) : null;
    if(item == null) return null;
    const discountedPrice = item.price - parseFloat((item.price * 0.1).toFixed(2));

  return (<>
  <div className="w-full flex items-center border-b-2 pb-3 border-black">

    {/* Product Image and Title */}
    <div className="w-[40%] flex items-center">
        <img src={item.image} alt="Product Image"  className="w-[50px] rounded-sm border border-red-100"/>
        <div className="ml-5 text-xl leading-10 xs:ml-1">
        <h2 className="xs:hidden">{item.title}</h2>
        <button onClick={()=> removeItem(id) }className="hover:text-red-400 cursor-pointer flex items-center gap-4 xs:text-sm xs:gap-0 xs:flex-col">Remove Item: <FaTrashAlt/></button>
        </div>
    </div>

    {/* Product Price */}
    <div className="w-[20%] text-center ">
        <h1 className="text-2xl xs:text-sm xs:font-bold">${discountedPrice}</h1>
    </div>

    {/* Product Quantity */}
    <div className="w-[20%] text-center ">
        <h1 className="text-2xl xs:text-sm xs:font-bold">x{qty}</h1>
    </div>

    {/* Product Total */}
    <div className="w-[20%] text-end ">
        <h1 className="text-2xl xs:text-sm xs:font-bold">${(discountedPrice * qty).toFixed(2)}</h1>
    </div>


  </div>
       
  </>)
}

export default CartCard