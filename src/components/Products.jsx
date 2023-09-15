import { useEffect, useState } from "react";
import Card from "./Card";


const Products = () => {
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch JSON data
        const fetchData = async () => {
         
            
            const response = await fetch('/public/products.json');

            const jsonData = await response.json();
            setProducts(jsonData);
            setLoading(false);
         
        };
    
        fetchData();
      }, []);
      console.log(products);
    
      if (loading) {
        return <div>Loading...</div>;
      }
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