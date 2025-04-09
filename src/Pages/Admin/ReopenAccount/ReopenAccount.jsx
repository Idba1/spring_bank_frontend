import { useState } from 'react';
import Swal from 'sweetalert2';

const ReopenAccount = () => {
    const [accountNumber, setAccountNumber] = useState('');

    const handleReopen = async () => {
        // Ensure account number is provided
        if (!accountNumber) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Account Number',
                text: 'Please provide a valid account number to reopen the account.',
            });
            return;
        }

        try {
            // Make a POST request to reopen the account using the provided account number
            const res = await fetch(`http://localhost:9090/api/accounts/reopen/${accountNumber}`, {
                method: 'POST',
            });

            if (!res.ok) {
                // If the request fails, display an error message
                const data = await res.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Reopen Account',
                    text: data.message || 'There was an issue reopening the account. Please try again later.',
                });
            } else {
                // Show success message if the account is reopened successfully
                Swal.fire({
                    icon: 'success',
                    title: 'Account Reopened',
                    text: `Account with number ${accountNumber} has been successfully reopened.`,
                });

                // Optionally reset the input field
                setAccountNumber('');
            }
        } catch (err) {
            // Catch network or other related errors
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to reopen the account. Please check your connection or try again later.',
            });
        }
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Enter Account Number"
                className="input input-bordered w-full"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
            />
            <button className="btn btn-accent" onClick={handleReopen}>
                Reopen Account
            </button>
        </div>
    );
};

export default ReopenAccount;