import  { useEffect, useState } from 'react'
import Cards from './Cards';
import Loading from './Loading';

function ShopElectronics() {
  const [data, setData] = useState<any[]>([]);
  const electronicsCategory = "electronics";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${electronicsCategory}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



return (
  <div className="w-full flex  flex-wrap h-[100%] gap-4 content-start">
    { data.length === 0 ? 
      <div className="w-full h-screen absolute left-[50%] top-[50%]">
        <Loading /> 
      </div>
    : data.map((item) => (
        <Cards
          key={item?.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          img={item.image}
        />
      )) }
  </div>
);
}

export default ShopElectronics