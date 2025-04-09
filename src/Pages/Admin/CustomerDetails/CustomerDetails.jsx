// /Pages/Customer/CustomerDetails/CustomerDetails.jsx
import { useEffect, useState } from 'react';

const CustomerDetails = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9090/api/accounts/customerdata')
            .then((res) => res.json())
            .then((data) => setCustomers(data));
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Account</th>
                        <th>Status</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((c, i) => (
                        <tr key={i}>
                            <td>{c.name}</td>
                            <td>{c.accountNumber}</td>
                            <td>{c.status}</td>
                            <td>${c.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerDetails;