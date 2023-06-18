import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/WORLD.png";

function Header() {

    const navigate = useNavigate();

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="bg-sky-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <span className="cursor-pointer flex-shrink-0">
                            <img className="w-32 mt-2" src={logo} alt="Logo" onClick={()=>navigate("/")}/>
                        </span>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4 font-extrabold">
                                <span className="hover:bg-sky-900 text-white px-3 py-2 rounded-md text-lg cursor-pointer transition duration-150 ease-in-out" onClick={()=>navigate("/")}>Home</span>
                                <span className="hover:bg-sky-900 text-white px-3 py-2 rounded-md text-lg cursor-pointer transition duration-150 ease-in-out" onClick={()=>navigate("/blog")}>Blog</span>
                            </div>
                        </div>
                    </div>

                    <div className="mr-2 flex md:hidden">
                        <button id="menuButton" type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-sky-700 transition duration-150 ease-in-out" aria-label="Menu" aria-expanded="false" onClick={toggleMenu}>
                            <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="menu" className={`md:hidden ${isMenuOpen ? "" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <span className="hover:bg-sky-700 text-white font-extrabold block px-3 py-2 rounded-md text-base cursor-pointer transition duration-150 ease-in-out" onClick={()=>navigate("/")}>Home</span>
                    <span className="hover:bg-sky-700 text-white font-extrabold block px-3 py-2 rounded-md text-base cursor-pointer transition duration-150 ease-in-out" onClick={()=>navigate("/blog")}>Blog</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;