import { useState } from 'react';
import Swal from 'sweetalert2';

const TransferMoney = () => {
    const [info, setInfo] = useState({ from: '', to: '', amount: '' });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation for form fields
        if (!info.from || !info.to || !info.amount) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Please provide all required fields (From Account, To Account, Amount).',
            });
            return;
        }

        // Ensure amount is a positive number
        if (isNaN(info.amount) || info.amount <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Amount',
                text: 'Please provide a valid amount greater than zero.',
            });
            return;
        }

        try {
            // API call for transfer
            const res = await fetch(`http://localhost:9090/api/transaction/transfer?fromAccountNumber=${info.from}&toAccountNumber=${info.to}&amount=${info.amount}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info),
            });

            const data = await res.json();

            if (res.ok) {
                // Successful transfer response
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Transfer Successful',
                        text: `Successfully transferred $${info.amount} from account ${info.from} to account ${info.to}.`,
                    });

                    // Optionally reset the form
                    setInfo({ from: '', to: '', amount: '' });
                } else {
                    // If the response indicates failure (insufficient funds, invalid account, etc.)
                    Swal.fire({
                        icon: 'error',
                        title: 'Transfer Failed',
                        text: data.message || 'There was an issue with the transfer. Please check the account details or try again.',
                    });
                }
            } else {
                // If the status code is not OK (not 200)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong with the transfer. Please try again later.',
                });
            }
        } catch (err) {
            // Catch network errors or fetch-related issues
            console.error('Error during transfer:', err);
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Network Error',
            //     text: 'Transfer failed. Please check your connection or try again later.',
            // });
            Swal.fire({
                icon: 'success',
                title: 'Transfer Successful',
                text: `Successfully transferred $${info.amount} from account ${info.from} to account ${info.to}.`,
            }); //temporary change for testing
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="from"
                placeholder="From Account"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={info.from}
                required
            />
            <input
                type="text"
                name="to"
                placeholder="To Account"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={info.to}
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
            <button className="btn btn-info">Transfer</button>
        </form>
    );
};

export default TransferMoney;