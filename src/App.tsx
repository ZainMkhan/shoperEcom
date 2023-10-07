import './App.css'
import Navbar from './components/navigation/Navbar'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ShopMen from './components/main/ShopMen';
import ShopWomen from './components/main/ShopWomen';
import ShopJewelry from './components/main/ShopJewelry';
import ShopElectronics from './components/main/ShopElectronics';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import OrderPlaced from './components/main/OrderPlaced';


function App() {

  return(<>

    <ShoppingCartProvider>
      <Navbar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/shop" element={<Shop />}>
                    <Route path="/shop/" element={<ShopMen />} />
                    <Route path="/shop/women" element={<ShopWomen />} />
                    <Route path="/shop/jewelry" element={<ShopJewelry />} />
                    <Route path="/shop/electronics" element={<ShopElectronics />} /> 
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-placed" element={<OrderPlaced/>} />
          </Routes> 
      
      </ShoppingCartProvider>
  </>)
}

export default App
