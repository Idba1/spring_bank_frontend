import React, { useEffect, useState } from "react";

const CustomerDetails = () => {
    const [customerData, setCustomerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:9090/api/accounts/customerdata?accountNumber=232625525760"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCustomerData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomerData();
    }, []);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center">Customer Account Details</h2>
            <div className="space-y-2 text-gray-700">
                {Object.entries(customerData).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b py-1">
                        <span className="capitalize font-medium">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span>{value?.toString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerDetails;
