import { useEffect, useState } from "react";
import Card from "./Card";


const Products = () => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        // Function to fetch JSON data
        const fetchData = async () => {
         
            
            const response = await fetch('/products.json');

            const jsonData = await response.json();
            setProducts(jsonData);
         
        };
    
        fetchData();
      }, []);
      console.log(products);
    
    return (
       
        <div>
            <div>
                <h1 className="text-center font-black text-3xl p-10"> Our Products </h1>
            </div>
            <div>
            {
                    products.map(product => <Card
                        key={product.product_id}
                        productCard={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Products;