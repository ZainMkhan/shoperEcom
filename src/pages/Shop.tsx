import ShopSidebar from "../components/main/ShopSidebar"
import ShopDisplay from "../components/main/ShopDisplay"

function Shop() {

  return(<>
  <div className="w-full  bg-slate-100 min-h-screen">
    <div className="w-full  bg-slate-100 flex">
      <ShopSidebar />
      <ShopDisplay />
    </div>
  </div>
  </>)
}

export default Shop;