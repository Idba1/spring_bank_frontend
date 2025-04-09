import { useState } from 'react';
import toast from 'react-hot-toast';

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
        try {
            const res = await fetch('http://localhost:9090/api/customer/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                toast.success('Customer Registered Successfully!');
            } else {
                toast.error(data.message || 'Error registering customer');
            }
        } catch (err) {
            toast.error('Error registering customer');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Customer Name"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="motherName"
                placeholder="Mother's Name"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nid"
                placeholder="NID"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <select
                name="gender"
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
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="date"
                name="birth_date"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="number"
                name="balance"
                placeholder="Initial Balance"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nomineeName"
                placeholder="Nominee Name"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <input
                type="text"
                name="nomineeAddress"
                placeholder="Nominee Address"
                onChange={handleChange}
                className="input input-bordered w-full"
                required
            />
            <button className="btn btn-primary">Register</button>
        </form>
    );
};

export default CustomerRegister;