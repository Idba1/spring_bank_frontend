import React, { useState } from 'react';

const apiUrl = 'http://localhost:9090';

const CustomerInfo = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [customerData, setCustomerData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchCustomerData = async () => {
        if (!accountNumber) {
            alert('Please enter an account number.');
            return;
        }

        setLoading(true);
        setError('');
        setCustomerData(null);

        try {
            const response = await fetch(`${apiUrl}/api/accounts/customerdata?accountNumber=${accountNumber}`);

            if (response.ok) {
                const data = await response.json();
                setCustomerData(data);
            } else {
                setError('Customer not found or error fetching data.');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to connect to the server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Customer Data Fetcher</h2>

            <div className="flex gap-2 items-center mb-4">
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    placeholder="Enter Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
                <button
                    onClick={fetchCustomerData}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Fetch
                </button>
            </div>

            {loading && <p className="text-center text-gray-500">Loading...</p>}

            {error && <p className="text-red-500 text-center">{error}</p>}

            {customerData && (
                <div className="mt-6 space-y-2">
                    {Object.entries(customerData).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b py-1">
                            <span className="capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span>{value?.toString()}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomerInfo;
