// /Pages/Admin/TransferMoney.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';

const TransferMoney = () => {
    const [info, setInfo] = useState({ from: '', to: '', amount: '' });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:9090/api/transaction/transfer`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info),
            });
            await res.json();
            toast.success('Transfer Successful');
        } catch (err) {
            toast.error('Transfer Failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="from" placeholder="From Account" className="input input-bordered w-full" onChange={handleChange} required />
            <input type="text" name="to" placeholder="To Account" className="input input-bordered w-full" onChange={handleChange} required />
            <input type="number" name="amount" placeholder="Amount" className="input input-bordered w-full" onChange={handleChange} required />
            <button className="btn btn-info">Transfer</button>
        </form>
    );
};

export default TransferMoney;
