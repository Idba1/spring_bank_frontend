import { useState } from 'react';
import Swal from 'sweetalert2';

const CustomerRegister = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        fatherName: '',
        motherName: '',
        nid: '',
        gender: '',
        address: '',
        birth_date: '',
        balance: '',
        nomineeName: '',
        nationality: '',
        nomineeAddress: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure balance is a positive number
        if (parseFloat(form.balance) <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Balance',
                text: 'Balance must be a positive number.',
            });
            return;
        }

        // Prepare final form with balance as a number
        const finalForm = {
            ...form,
            balance: parseFloat(form.balance),
        };

        try {
            const res = await fetch('http://localhost:9090/api/customer/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalForm),
            });

            const resultText = await res.text(); // backend returns plain text, not JSON

            if (res.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Customer Registered Successfully!',
                    text: resultText,
                });
                // Optionally reset form
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    fatherName: '',
                    motherName: '',
                    nid: '',
                    gender: '',
                    address: '',
                    birth_date: '',
                    balance: '',
                    nomineeName: '',
                    nationality: '',
                    nomineeAddress: '',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: resultText || 'Something went wrong!',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: 'Unable to register customer. Please try again later.',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Customer Name"
                value={form.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={form.fatherName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="motherName"
                placeholder="Mother's Name"
                value={form.motherName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nid"
                placeholder="NID"
                value={form.nid}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="date"
                name="birth_date"
                value={form.birth_date}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="number"
                name="balance"
                placeholder="Initial Balance"
                value={form.balance}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nomineeName"
                placeholder="Nominee Name"
                value={form.nomineeName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                value={form.nationality}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nomineeAddress"
                placeholder="Nominee Address"
                value={form.nomineeAddress}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
};

export default CustomerRegister;