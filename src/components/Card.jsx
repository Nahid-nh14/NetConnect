

const Card = ({ productCard}) => {
    const {product_id,product_name,product_image,description,price,stock_quantity} = productCard
    console.log(product_id)
    return (
        <div className="">
            <div className="card card-side bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl  p-10 my-5">
  <div className="flex justify-center w-1/2"><img className="h-96 "  src={product_image} alt="Movie"/></div>
  <div className="card-body ">
<div className="text-left font-black flex flex-col justify-center my-auto">
<h2 className="card-title font-black">Name: {product_name}</h2>
    <p>Description: {description}</p>
    <p>Price: {price} Tk</p>
    <p>Stock Quantity:{stock_quantity} Pice</p>
</div>
  </div>
</div>
        </div>
    );
};

export default Card;