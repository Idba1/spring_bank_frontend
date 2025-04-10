import React from "react";
import { FaArrowRight, FaDollarSign, FaUserAlt, FaChartLine, FaUsers, FaBriefcase } from "react-icons/fa";
import CustomBankingSection from "../../Home/CustomBankingSection/CustomBankingSection";

const services = [
    {
        title: "Savings Account",
        description: "Perfectly simple and easy to distinguish to the claims of duty ...",
        icon: <FaDollarSign />,
        image: "https://i.ibb.co/tTv8mHtX/banking-2-1.jpg",
    },
    {
        title: "Current Account",
        description: "Duty through weakness of will, which is the same as saying through...",
        icon: <FaDollarSign />,
        image: "https://i.ibb.co/27T58m25/banking-3-1.jpg",
    },
    {
        title: "Family 360°",
        description: "Choice is untrammelled when nothing prevents our being able to do...",
        icon: <FaUsers />,
        image: "https://i.ibb.co/kV9C8P13/banking-4-1.jpg",
    },
    {
        title: "Senior Citizen",
        description: "Choice is untrammelled when nothing prevents our being able to do...",
        icon: <FaUserAlt />,
        image: "https://i.ibb.co/1Gx1FX6S/banking-8-1.jpg",
    },
    {
        title: "Demat Account",
        description: "Perfectly simple and easy to distinguish to the claims of duty ...",
        icon: <FaChartLine />,
        image: "https://i.ibb.co/XrK8rVdT/banking-9-1.jpg",
    },
    {
        title: "Business Accounts",
        description: "Duty through weakness of will, which is the same as saying through...",
        icon: <FaBriefcase />,
        image: "https://i.ibb.co/LDN0nZPs/banking-11-1.jpg",
    },
];
const Services = () => {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co.com/S40R5yPT/services.png" alt="" />
            </div>
            <div className="max-w-7xl mx-auto px-4 py-16">

                <p className="text-red-600 font-semibold text-sm uppercase text-center mb-2">
                    Custom Banking
                </p>
                <h2 className="text-4xl font-bold text-center mb-12">
                    Banking For Your Needs
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                                {/* Read More Button */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-white bg-red-600 px-2 py-2 rounded-bl-md">
                                        {service.icon}
                                    </div>
                                    <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium">
                                        ➔ Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CustomBankingSection />
        </div>
    );
};

export default Services;
