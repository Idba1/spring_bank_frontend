import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaSearch, FaHeadphones } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-white shadow-md w-full'>
            <div className='container mx-auto px-4 py-2'>
                {/* Top Row */}
                <div className='hidden md:flex justify-between items-center mb-2'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-red-600 text-white px-3 py-1 rounded-full text-sm cursor-pointer'>
                            🔍 Looking: <span className='font-semibold'>Personal ▼</span>
                        </div>
                        <div className='flex gap-2'>
                            <Link to='/login' className='text-gray-600 hover:text-red-600'>Login</Link>
                            <Link to='/register' className='text-gray-600 hover:text-red-600'>Register</Link>
                        </div>
                        <div className='text-gray-600 flex items-center gap-1'>
                            ✉ info@example.com
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex gap-2'>
                            <Link to='/career' className='text-gray-600 hover:text-red-600'>Careers</Link>
                            <Link to='/faqs' className='text-gray-600 hover:text-red-600'>FAQs</Link>
                            <Link to='/debit-card' className='text-gray-600 hover:text-red-600'>Debit Card</Link>
                            <Link to='/apply' className='text-gray-600 hover:text-red-600'>Apply Now</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <Link to='/' className='flex items-center gap-2'>
                        <img className='w-auto h-8' src='/logo.png' alt='Flexibank Logo' />
                        <span className='font-bold text-lg'>Flexi<span className='text-red-600'>bank</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-4'>
                        <nav className='flex gap-4 text-gray-600'>
                            <Link to='/'>Home</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/news'>News</Link>
                            <Link to='/apply'>Apply Now</Link>
                            <Link to='/get-in-touch'>Get In Touch</Link>
                        </nav>
                        <div className='flex items-center gap-2'>
                            <FaSearch className='text-gray-600 cursor-pointer' />
                            <FaHeadphones className='text-gray-600 cursor-pointer' />
                        </div>
                        <Link to='/new-account' className='bg-red-600 text-white px-4 py-2 rounded-lg'>
                            ➜ New Account
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} className='text-gray-600 text-2xl'>
                            {isOpen ? <HiX /> : <HiOutlineMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className='md:hidden flex flex-col items-center mt-4 space-y-4 bg-white shadow-md p-4'>
                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/news'>News</Link>
                        <Link to='/apply'>Apply Now</Link>
                        <Link to='/get-in-touch'>Get In Touch</Link>
                        <div className='flex items-center gap-2'>
                            <FaSearch className='text-gray-600 cursor-pointer' />
                            <FaHeadphones className='text-gray-600 cursor-pointer' />
                        </div>
                        <Link to='/new-account' className='bg-red-600 text-white px-4 py-2 rounded-lg'>
                            ➜ New Account
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
