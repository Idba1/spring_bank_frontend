import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BalanceCheck from "../../Admin/BalanceCheck/BalanceCheck";
import TransferMoney from "../../Admin/TransferMoney/TransferMoney";
import TransactionHistory from "../../Admin/TransactionHistory/TransactionHistory";
import CustomerHome from "./CustomerHome";
import CustomerInfo from "../CustomerDetails/CustomerInfo";

const CustomerDashboard = () => {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const renderComponent = () => {
        switch (active) {
            case "home":
                return <CustomerHome />;
            case "dashboard":
                return <CustomerInfo />;
            case "balance":
                return <BalanceCheck />;
            case "transfer":
                return <TransferMoney />;
            case "history":
                return <TransactionHistory />;
            default:
                return <CustomerHome />;
        }
    };

    const menuItems = [
        { key: "home", label: "Home" },
        { key: "dashboard", label: "Dashboard" },
        { key: "balance", label: "Balance Check" },
        { key: "transfer", label: "Transfer Money" },
        { key: "history", label: "Transaction History" },
    ];

    const handleMenuClick = (key) => {
        setActive(key);
        setMenuOpen(false); // close menu after selection on mobile
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="flex md:hidden justify-between items-center bg-white px-4 py-3 shadow-md">
                <h2 className="text-xl font-bold text-red-600">Customer Menu</h2>
                <button
                    className="text-gray-700 text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`bg-white w-full md:w-64 p-4 shadow-lg md:block ${menuOpen ? 'block' : 'hidden'} md:relative fixed top-16 left-0 z-50`}>
                <ul className="space-y-3">
                    {menuItems.map((item) => (
                        <li key={item.key}>
                            <button
                                onClick={() => handleMenuClick(item.key)}
                                className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 ${active === item.key
                                    ? "bg-red-600 text-white"
                                    : "text-gray-700 hover:bg-red-700 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 mt-4 md:mt-0">{renderComponent()}</main>
        </div>
    );
};

export default CustomerDashboard;