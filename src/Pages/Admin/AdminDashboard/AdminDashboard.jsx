import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import BalanceCheck from '../BalanceCheck/BalanceCheck';
import DepositMoney from '../DepositMoney/DepositMoney';
import WithdrawMoney from '../WithdrawMoney/WithdrawMoney';
import TransferMoney from '../TransferMoney/TransferMoney';
import CloseAccount from '../CloseAccount/CloseAccount';
import ReopenAccount from '../ReopenAccount/ReopenAccount';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import CustomerRegister from '../CustomerRegister/CustomerRegister';

const components = {
    'Customer Register': <CustomerRegister />,
    'Balance Check': <BalanceCheck />,
    'Deposit Money': <DepositMoney />,
    'Withdraw Money': <WithdrawMoney />,
    'Transfer Money': <TransferMoney />,
    'Close Account': <CloseAccount />,
    'Re-open Account': <ReopenAccount />,
    'Customer Details': <CustomerDetails />,
    'Transaction History': <TransactionHistory />,
};

const menuItems = Object.keys(components);

const AdminDashboard = () => {
    const [selected, setSelected] = useState('Customer Register');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSelect = (key) => {
        setSelected(key);
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <aside className={`bg-white w-64 p-4 shadow-lg z-40 fixed md:relative h-full md:block transition-transform duration-300
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <h2 className="text-xl font-bold mb-6 text-red-600">Admin Panel</h2>
                <ul className="space-y-3">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => handleSelect(item)}
                                className={`w-full text-left px-4 py-2 rounded-md transition-all duration-200 ${
                                    selected === item
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-600 hover:text-white'
                                }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Mobile Header */}
                <div className="md:hidden bg-white shadow-md p-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-red-600">Admin Dashboard</h2>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-gray-800 text-2xl focus:outline-none"
                    >
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-6 mt-2 md:mt-0">
                    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">{selected}</h1>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        {components[selected]}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
