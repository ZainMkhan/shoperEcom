import Landing from "../components/main/Landing"
import Categories from "../components/main/Categories"


const Home = () => {

  return(<>
  <div className="w-full h-screen flex flex-col items-center bg-slate-100 overflow-scroll ">
  <Landing />
  <Categories />
  </div>
  </>)
}

export default Home