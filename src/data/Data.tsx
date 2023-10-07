import { useEffect, useState } from 'react'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string
}

function Data() {
    const [data, setData] = useState<Product[]>([]);

    const fetchData = async () => {
      try {
        const response = await fetch(
            'https://fakestoreapi.com/products'
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

  return data
}

export default Data