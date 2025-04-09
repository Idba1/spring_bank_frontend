// /Pages/Admin/ReopenAccount.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';

const ReopenAccount = () => {
    const [id, setId] = useState('');

    const handleReopen = async () => {
        try {
            const res = await fetch(`http://localhost:9090/api/accounts/reopen/${id}`, {
                method: 'PATCH',
            });
            await res.json();
            toast.success('Account Reopened');
        } catch (err) {
            toast.error('Failed to Reopen Account');
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
            <button className="btn btn-accent" onClick={handleReopen}>
                Reopen Account
            </button>
        </div>
    );
};

export default ReopenAccount;
