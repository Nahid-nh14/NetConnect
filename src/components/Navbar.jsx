import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" font-black px-20 flex justify-between items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="flex justify-between items-center ">
            <div className="h-16 w-16">
                    <img className="rounded-full" src="/network-logo-template-png_31401.jpg" alt="" />
                </div>
                <div className=" pl-10">
                    <h2>NETCONNECT</h2>
                    <p>HUB</p>
                </div>

            </div>
            <nav className="px-10" >
                <ul className="flex justify-center space-x-4">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')} >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : 'default')} >
                           Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;