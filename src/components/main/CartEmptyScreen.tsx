import { Link } from "react-router-dom"

function CartEmptyScreen() {
  return (<>
  <div className='w-full flex flex-col items-center'>
    <h1 className='font-bold text-2xl '>Your Cart is Empty</h1>
    <button className="w-[20%] bg-red-400 p-4 mt-10 rounded-xl text-white font-bold hover:bg-red-700 active:scale-95 shadow-xl xs:w-[50%] ipad:w-[50%]">
        <Link to="/">Return to Home</Link>
        </button>
  </div>
  </>)
}

export default CartEmptyScreen