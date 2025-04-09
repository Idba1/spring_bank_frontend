import { useState } from 'react';
import Swal from 'sweetalert2';

const CloseAccount = () => {
    const [accountNumber, setAccountNumber] = useState('');

    const handleClose = async () => {
        // Check if the account number is provided
        if (!accountNumber) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Account Number',
                text: 'Please provide a valid account number to close the account.',
            });
            return;
        }

        try {
            // Send the request to close the account using the provided account number (PUT method)
            const res = await fetch(`http://localhost:9090/api/accounts/close/${accountNumber}`, {
                method: 'PUT',
            });

            if (!res.ok) {
                // If the server returns an error, show an error message
                const data = await res.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Close Account',
                    text: data.message || 'There was an issue closing the account. Please try again later.',
                });
            } else {
                // If the response is successful, show a success message
                Swal.fire({
                    icon: 'success',
                    title: 'Account Closed',
                    text: `Account with number ${accountNumber} has been successfully closed.`,
                });

                // Optionally reset the input field
                setAccountNumber('');
            }
        } catch (err) {
            // Catch any network-related errors
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to close the account. Please check your connection or try again later.',
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
            <button className="btn btn-error" onClick={handleClose}>
                Close Account
            </button>
        </div>
    );
};

export default CloseAccount;
