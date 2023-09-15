import Products from "./Products";


const Home = () => {
    return (
        <div>
            <div className='md:flex container mx-auto justify-evenly items-center gradient p-10 '>
                <div className='p-5 text-lg font-black'>
                    <p>Empower your connectivity with our premium network shop. <br/> Find top-notch networking gear and <br/>expert guidance for a seamless online experience. </p>
                </div>
                <div className="w-1/2"> <img src="/public/images/istockphoto-521663065-612x612.png" alt="" /></div>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;