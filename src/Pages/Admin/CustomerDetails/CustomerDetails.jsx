import { useState } from 'react';

const CustomerDetails = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (accountNumber) {
            fetchCustomerDetails(accountNumber);
        } else {
            alert('Please enter an account number');
        }
    };

    const fetchCustomerDetails = (accountNumber) => {
        setLoading(true);
        fetch(`http://localhost:9090/api/accounts/customerdata?accountNumber=${accountNumber}`)
            .then((res) => res.json())
            .then((data) => {
                setCustomer(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching customer data:', err);
                setLoading(false);
            });
    };

    return (
        <div className="p-4 md:p-6">
            {/* Search Box */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2 w-full sm:w-72"
                    placeholder="Enter Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
                >
                    Search
                </button>
            </form>

            {/* Loading State */}
            {loading && <div className="text-center text-gray-600">Loading customer details...</div>}

            {/* Customer Details */}
            {!loading && customer && (
                <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
                    <table className="table-auto w-full text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-100 text-left text-gray-700">
                                <th className="p-2 border-b">Field</th>
                                <th className="p-2 border-b">Details</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {[
                                { label: 'Name', value: customer.name },
                                { label: 'Account Number', value: customer.accountNumber },
                                { label: 'Status', value: customer.status || 'N/A' },
                                { label: 'Balance', value: `$${customer.balance}` },
                                { label: 'Email', value: customer.email },
                                { label: 'Phone', value: customer.phone },
                                { label: 'Father\'s Name', value: customer.fatherName },
                                { label: 'Mother\'s Name', value: customer.motherName },
                                { label: 'NID', value: customer.nid },
                                { label: 'Gender', value: customer.gender },
                                { label: 'Address', value: customer.address },
                                { label: 'Nominee Name', value: customer.nomineeName },
                                { label: 'Nominee Address', value: customer.nomineeAddress },
                                { label: 'Nationality', value: customer.nationality },
                                { label: 'Birth Date', value: customer.birth_date || 'N/A' },
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                                    <td className="p-2 font-medium border-b w-1/3">{row.label}</td>
                                    <td className="p-2 border-b">{row.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {!loading && !customer && (
                <div className="text-center text-gray-500 mt-6">No customer found with this account number.</div>
            )}
        </div>
    );
};

export default CustomerDetails;
