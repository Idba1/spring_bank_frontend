// /Pages/Admin/WithdrawMoney.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';

const WithdrawMoney = () => {
    const [info, setInfo] = useState({ accountNumber: '', amount: '' });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:9090/api/transaction/withdraw`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info),
            });
            await res.json();
            toast.success('Withdrawal Successful');
        } catch (err) {
            toast.error('Withdrawal Failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="accountNumber" placeholder="Account Number" className="input input-bordered w-full" onChange={handleChange} required />
            <input type="number" name="amount" placeholder="Amount" className="input input-bordered w-full" onChange={handleChange} required />
            <button className="btn btn-warning">Withdraw</button>
        </form>
    );
};

export default WithdrawMoney;
