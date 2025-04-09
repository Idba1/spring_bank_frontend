// /Pages/Admin/CloseAccount.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';

const CloseAccount = () => {
    const [id, setId] = useState('');

    const handleClose = async () => {
        try {
            const res = await fetch(`http://localhost:9090/api/accounts/close/${id}`, {
                method: 'PATCH',
            });
            await res.json();
            toast.success('Account Closed');
        } catch (err) {
            toast.error('Failed to Close Account');
        }
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Enter Customer ID"
                className="input input-bordered w-full"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button className="btn btn-error" onClick={handleClose}>
                Close Account
            </button>
        </div>
    );
};

export default CloseAccount;
