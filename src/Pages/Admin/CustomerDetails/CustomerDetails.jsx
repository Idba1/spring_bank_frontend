import { useState, useEffect } from 'react';

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
        <div className="p-6">
            {/* Search Box */}
            <form onSubmit={handleSearch} className="flex justify-center mb-6">
                <input
                    type="text"
                    className="input input-bordered w-72 p-3 mr-4"
                    placeholder="Enter Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>

            {/* Display Customer Details */}
            {loading && <div>Loading customer details...</div>}
            {!loading && customer && (
                <div className="overflow-x-auto p-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{customer.name}</td>
                            </tr>
                            <tr>
                                <td>Account Number</td>
                                <td>{customer.accountNumber}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>{customer.status || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Balance</td>
                                <td>${customer.balance}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{customer.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{customer.phone}</td>
                            </tr>
                            <tr>
                                <td>Father's Name</td>
                                <td>{customer.fatherName}</td>
                            </tr>
                            <tr>
                                <td>Mother's Name</td>
                                <td>{customer.motherName}</td>
                            </tr>
                            <tr>
                                <td>NID</td>
                                <td>{customer.nid}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{customer.gender}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{customer.address}</td>
                            </tr>
                            <tr>
                                <td>Nominee Name</td>
                                <td>{customer.nomineeName}</td>
                            </tr>
                            <tr>
                                <td>Nominee Address</td>
                                <td>{customer.nomineeAddress}</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>{customer.nationality}</td>
                            </tr>
                            <tr>
                                <td>Birth Date</td>
                                <td>{customer.birth_date || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            {!loading && !customer && <div>No customer found with this account number.</div>}
        </div>
    );
};

export default CustomerDetails;