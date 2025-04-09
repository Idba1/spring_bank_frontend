// /Pages/Admin/DepositMoney.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';

const DepositMoney = () => {
    const [info, setInfo] = useState({ accountNumber: '', amount: '' });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:9090/api/transaction/deposit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info),
            });
            await res.json();
            toast.success('Deposit Successful');
        } catch (err) {
            toast.error('Deposit Failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="accountNumber" placeholder="Account Number" className="input input-bordered w-full" onChange={handleChange} required />
            <input type="number" name="amount" placeholder="Amount" className="input input-bordered w-full" onChange={handleChange} required />
            <button className="btn btn-success">Deposit</button>
        </form>
    );
};

export default DepositMoney;