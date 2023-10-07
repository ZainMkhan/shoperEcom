import { Outlet } from "react-router-dom"


function ShopDisplay() {
  return (<>
<div className="w-[85%] flex justify-center item-evenly flex-wrap  h-max mb-10">
<div className="w-full flex flex-wrap  mt-10 ml-40 xs:ml-5">
    <Outlet />
  </div>
</div>
  </>)
}

export default ShopDisplay