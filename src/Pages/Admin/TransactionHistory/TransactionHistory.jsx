// /Pages/Customer/TransactionHistory/TransactionHistory.jsx
import { useState } from 'react';

const TransactionHistory = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [history, setHistory] = useState([]);

    const handleFetch = async () => {
        const res = await fetch(`http://localhost:9090/api/transaction/history/${accountNumber}`);
        const data = await res.json();
        setHistory(data);
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Account Number"
                    className="input input-bordered w-full max-w-xs mr-2"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
                <button className="btn btn-outline" onClick={handleFetch}>
                    Get History
                </button>
            </div>
            <ul className="space-y-2">
                {history.map((txn, i) => (
                    <li key={i} className="border p-3 rounded shadow-sm">
                        <p><strong>Type:</strong> {txn.type}</p>
                        <p><strong>Amount:</strong> ${txn.amount}</p>
                        <p><strong>Date:</strong> {new Date(txn.date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;