import { useEffect, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";

function ShopMen() {
  const [data, setData] = useState<any[]>([]);
  const menCategory = "men's clothing";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${menCategory}`
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
    <div className="w-full flex  flex-wrap  content-start gap-4">
      {data.length === 0 ? (
        <div className="w-max h-max absolute left-[50%] top-[50%] overflow-hidden">
          <Loading />
        </div>
      ) : (
        data.map((item) => (
          <Cards
            key={item?.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.image}
          />
        ))
      )}
    </div>
  );
}

export default ShopMen;
