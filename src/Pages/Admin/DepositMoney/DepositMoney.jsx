import { useState } from 'react';
import Swal from 'sweetalert2';

const DepositMoney = () => {
    const [info, setInfo] = useState({ accountNumber: '', amount: '' });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate if the inputs are empty
        if (!info.accountNumber || !info.amount) {
            Swal.fire({
                icon: 'error',
                title: 'Missing information',
                text: 'Please fill out both the Account Number and Amount fields.',
            });
            return;
        }

        try {
            // Send the deposit request to the API
            const res = await fetch(`http://localhost:9090/api/transaction/deposit?accountNumber=${info.accountNumber}&amount=${info.amount}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info),
            });

            // Check for a successful response
            if (res.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Deposit Successful',
                    text: `Amount of $${info.amount} has been deposited successfully into account number ${info.accountNumber}`,
                });
                setInfo({ accountNumber: '', amount: '' }); 
            } else {
                // If response is not OK, show error
                const data = await res.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Deposit Failed',
                    text: data.message || 'Something went wrong. Please try again later.',
                });
            }
        } catch (err) {
            // Catch any other errors (e.g., network issues)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Deposit failed. Please check your connection or try again later.',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={info.accountNumber}
                required
            />
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={info.amount}
                required
            />
            <button className="btn btn-success">Deposit</button>
        </form>
    );
};

export default DepositMoney;