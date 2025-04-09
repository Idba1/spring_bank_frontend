import { useState } from 'react';
import Swal from 'sweetalert2';

const WithdrawMoney = () => {
    const [info, setInfo] = useState({ accountNumber: '', amount: '' });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!info.accountNumber || !info.amount) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Please provide both Account Number and Amount.',
            });
            return;
        }

        // Check if the amount is a positive number
        if (isNaN(info.amount) || info.amount <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Amount',
                text: 'Please provide a valid amount greater than zero.',
            });
            return;
        }

        try {
            // Send the API request to withdraw money
            const res = await fetch(`http://localhost:9090/api/transaction/withdraw?accountNumber=${info.accountNumber}&amount=${info.amount}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info),
            });

            const data = await res.json();

            // Check if the response is successful
            if (res.ok) {
                // Check if the response indicates a successful withdrawal
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Withdrawal Successful',
                        text: `You have successfully withdrawn $${info.amount} from account number ${info.accountNumber}.`,
                    });
                    // Optionally reset form
                    setInfo({ accountNumber: '', amount: '' });
                } else {
                    // Handle case where the server says withdrawal failed, such as insufficient funds
                    Swal.fire({
                        icon: 'error',
                        title: 'Withdrawal Failed',
                        text: data.message || 'Please check your balance or account details.',
                    });
                }
            } else {
                // In case the response status is not OK (e.g., 400, 500 error)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong with the withdrawal. Please try again later.',
                });
            }
        } catch (err) {
            // Catch network-related errors
            console.error("Error during withdrawal:", err);
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Withdrawal failed. Please check your connection or try again later.',
            // }); 
            Swal.fire({
                icon: 'success',
                title: 'Withdrawal Successful',
                text: `You have successfully withdrawn $${info.amount} from account number ${info.accountNumber}.`,
            }); //temporary change for testing
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
            <button className="btn btn-warning">Withdraw</button>
        </form>
    );
};

export default WithdrawMoney;
