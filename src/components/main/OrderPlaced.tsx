import { useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"
import { useShoppingCart } from "../../context/ShoppingCartContext";


function OrderPlaced() {
let [num, setNum] = useState(15)
let navigate = useNavigate();
let {emptyCart} = useShoppingCart();

useEffect(() => {
    const countdownInterval = setInterval(() => {
      setNum((prev) => prev - 1);
    }, 1000); 
    
    if (num === 0) {
      emptyCart();
      navigate("/");
      clearInterval(countdownInterval);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [num, navigate]);

  return (
    <div className="w-full  h-full flex items-center justify-center mt-60">
        <div className="w-[50%] h-[400px]">
            <h1 className="text-3xl font-medium text-center">Thankyou for placing your order!</h1>
            <h2 className="text-center text-lg mt-2">It will be delivered to you within 5-6 Working Days!</h2>
            <h2 className="mt-10 text-center text-blue-500">Redirecting to home page in {num} seconds</h2>
        </div>

    </div>
  )
}

export default OrderPlaced