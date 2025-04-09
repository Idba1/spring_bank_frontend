// /Pages/Admin/BalanceCheck.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';

const BalanceCheck = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(null);

    const handleCheck = async () => {
        try {
            const res = await fetch(`http://localhost:9090/api/customer/balance?accountNumber=${accountNumber}`);
            const data = await res.json();
            setBalance(data.balance);
        } catch (err) {
            toast.error('Failed to fetch balance');
        }
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Enter Account Number"
                className="input input-bordered w-full"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleCheck}>
                Check Balance
            </button>
            {balance !== null && (
                <div className="text-xl font-semibold">Balance: ${balance}</div>
            )}
        </div>
    );
};

export default BalanceCheck;