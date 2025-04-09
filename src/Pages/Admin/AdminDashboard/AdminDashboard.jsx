import { useState } from 'react';
import BalanceCheck from '../BalanceCheck/BalanceCheck';
import DepositMoney from '../DepositMoney/DepositMoney';
import WithdrawMoney from '../WithdrawMoney/WithdrawMoney';
import TransferMoney from '../TransferMoney/TransferMoney';
import CloseAccount from '../CloseAccount/CloseAccount';
import ReopenAccount from '../ReopenAccount/ReopenAccount';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import CustomerRegister from '../CustomerRegister/CustomerRegister';
import Sidebar from '../Sidebar/Sidebar';

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

const AdminDashboard = () => {
    const [selected, setSelected] = useState('Customer Register');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar for larger screens */}
            <Sidebar selected={selected} setSelected={setSelected} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-4 text-center">{selected}</h1>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    {components[selected]}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
