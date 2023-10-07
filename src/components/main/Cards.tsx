import { useShoppingCart } from "../../context/ShoppingCartContext";

type CardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
};

function Cards({ id, title, description, price, img }: CardProps) {
  let {getItemQty , increaseQty , decreaseQty} = useShoppingCart();
  let btnVal = getItemQty(id);

  const discountedPrice = price - parseFloat((price * 0.1).toFixed(2));

  return (
    <div className="w-1/5 h-[350px] flex flex-col justify-center rounded-2xl p-2 shadow-2xl bg-white xs:w-[240px] xs:h-[250px]">
      {/* Img Div */}
      <div className="w-full  h-3/6 flex justify-center">
          <img src={img} alt="Image here" className="w-11/12  object-contain hover:scale-105 overflow-hidden" />
      </div>
      {/* Details Div */}
      <div className="w-full  h-3/6 justify-evenly flex flex-col">
        <h1 className="truncate text-center font-bold">{title}</h1>
        <h2 className="truncate text-sm">{description}</h2>
        <h1 className="w-full flex justify-center font-bold text-2xl">${discountedPrice}<span className="text-slate-300 line-through pl-2">{price}</span></h1>
        {btnVal === 0 ? 
        <button onClick={() => increaseQty(id)} className="bg-blue-400 p-3 rounded-xl font-bold hover:bg-blue-500 ">Add to Cart</button>
        : <div className="w-full flex justify-evenly p-1 items-center">
          <button onClick={() => increaseQty(id)} className="bg-blue-400 rounded-xl font-bold w-20 p-2 hover:bg-blue-500">Add +</button>
          <h1 className="font-bold ">{btnVal}</h1>
          <button onClick={() => decreaseQty(id)} className="bg-blue-400 rounded-xl font-bold w-20 p-2 hover:bg-blue-500">Minus -</button>
          </div>}
      </div>
    </div>
  );
}

export default Cards;
