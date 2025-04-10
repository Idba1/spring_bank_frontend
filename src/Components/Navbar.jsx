import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaHeadphones } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "News", path: "/news" },
        { name: "Apply Now", path: "/apply" },
        { name: "Get In Touch", path: "/get-in-touch" },
        { name: "About", path: "/about" },
    ];

    const linkStyle = (path) =>
        `px-3 py-1 rounded-md transition-colors duration-300 ${
            isActive(path)
                ? "bg-red-600 text-white"
                : "text-black-600 hover:bg-red-700 hover:text-white"
        }`;

    return (
        <div className="bg-white shadow-md w-full font-bold text-black">
            <div className="container mx-auto px-4 py-2">
                {/* Top Row */}
                <div className="hidden md:flex justify-between items-center mb-2">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm cursor-pointer">
                            Looking: <span className="font-semibold">Banking Sheba</span>
                        </div>
                        <div className="flex gap-2">
                            <Link to="/login" className="text-black-600 hover:text-red-600">Login</Link>
                            <Link to="/registration" className="text-black-600 hover:text-red-600">Register</Link>
                        </div>
                        <div className="text-gray-600 flex items-center gap-1">
                            ✉ info@example.com
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <Link to="/faqs" className="text-black-600 hover:text-red-600">FAQs</Link>
                            <Link to="/debit-card" className="text-black-600 hover:text-red-600">Debit Card</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img className="w-auto h-8" src="/logo.png" alt="Flexibank Logo" />
                        <span className="font-bold text-lg">
                            Flexi<span className="text-red-600">bank</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        <nav className="flex gap-2 text-sm">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className={linkStyle(link.path)}>
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center gap-2">
                            <FaSearch className="text-black-600 cursor-pointer" />
                            <FaHeadphones className="text-black-600 cursor-pointer" />
                        </div>
                        <Link to="/new-account" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                            ➜ New Account
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black-600 text-2xl">
                            {isOpen ? <HiX /> : <HiOutlineMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center mt-4 space-y-3 bg-white shadow-md p-4 text-sm">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className={linkStyle(link.path)} onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-2">
                            <FaSearch className="text-black-600 cursor-pointer" />
                            <FaHeadphones className="text-black-600 cursor-pointer" />
                        </div>
                        <Link to="/new-account" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                            ➜ New Account
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
