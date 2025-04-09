import React, { useEffect, useState } from 'react';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const accountNumber = '232625525760';

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(`http://localhost:9090/api/transaction/history/${accountNumber}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch transaction history');
                }
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center">Transaction History</h1>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="space-y-4">
                    {transactions.length === 0 ? (
                        <p className="text-center text-gray-600">No transactions found.</p>
                    ) : (
                        transactions.map((txn) => (
                            <div
                                key={txn.id}
                                className="bg-white shadow rounded-lg p-4 border border-gray-200"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-600">{txn.type}</span>
                                    <span className="text-sm text-gray-500">{new Date(txn.timestamp).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-blue-600">৳{txn.amount}</span>
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${txn.status === 'completed'
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                    >
                                        {txn.status}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default TransactionHistory;
