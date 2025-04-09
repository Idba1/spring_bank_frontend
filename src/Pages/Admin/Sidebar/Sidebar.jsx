import { useState } from 'react';

const menuItems = [
    'Customer Register',
    'Balance Check',
    'Deposit Money',
    'Withdraw Money',
    'Transfer Money',
    'Close Account',
    'Re-open Account',
    'Customer Details',
    'Transaction History',
];

const Sidebar = ({ selected, setSelected, isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div>
            {/* Hamburger button or Cross button depending on the state */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-4 absolute top-4 left-4 z-50"
            >
                {/* Conditional rendering based on sidebar state */}
                {isSidebarOpen ? (
                    // Cross (X) icon to close the sidebar
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className="text-red-900" />
                    </svg>
                ) : (
                    // Hamburger icon to open the sidebar
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" className="text-red-900" />
                    </svg>
                )}
            </button>

            {/* Sidebar for larger screens */}
            <div className={`lg:w-64 bg-red-700 text-white p-5 fixed lg:relative h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? 'block' : 'lg:block hidden'}`}>
                <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => setSelected(item)}
                            className={`cursor-pointer p-2 rounded hover:bg-red-800 mb-2 ${selected === item ? 'bg-red-800' : ''}`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
