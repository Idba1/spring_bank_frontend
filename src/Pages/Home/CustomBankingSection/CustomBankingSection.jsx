import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const CustomBankingSection = () => {
    const [activeTab, setActiveTab] = useState("Savings Accounts");

    const menuItems = [
        { title: "Savings Accounts", subtitle: "High interest..." },
        { title: "Consumer Loans", subtitle: "Low collateral..." },
        { title: "Credit Cards", subtitle: "No fees..." },
        { title: "Advisory Services", subtitle: "Financial advice..." },
        { title: "Insurance Products", subtitle: "Fits your needs..." },
    ];

    return (
        <div className="bg-[#4A0E0E] text-white py-10 px-4 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-evenly">
                <div>
                    <h3 className="text-red-600 font-bold text-sm uppercase">Secure Growth</h3>
                    <h2 className="text-3xl font-bold mb-6">Enhance Your Wealth Safely</h2>
                </div>
                <div>
                    {/* Customer Support */}
                    <div className="top-0 right-0 flex items-center gap-3 p-4 md:flex">
                        <img
                            src="https://i.ibb.co.com/fYWNMYbf/men-1-1.png"
                            alt="Support"
                            className=" "
                        />
                        <div>
                            <p className="text-sm text-red-700 font-bold">Get Support</p>
                            <p className="font-bold text-lg">+49-55-678-90&91</p>
                            <p className="text-sm text-gray-500">9:00 am to 7:00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="bg-white text-black w-full lg:w-1/3 rounded-lg shadow-lg flex flex-col md:flex-row">
                    {/* Left Tabs */}
                    <div className="bg-red-700 text-white font-bold p-4 flex md:flex-col items-center md:items-start">
                        <button className="py-2 border-l-4 border-white pl-2 w-full text-left">BUSINESS</button>
                        <button className="py-2 text-gray-300 pl-2 w-full text-left">INDIVIDUAL</button>
                    </div>
                    {/* Right Menu */}
                    <div className="flex-1 p-4">
                        {menuItems.map((item) => (
                            <button
                                key={item.title}
                                onClick={() => setActiveTab(item.title)}
                                className={`block w-full text-left py-2 px-4 rounded-md transition-transform duration-500 ease-in-out transform ${activeTab === item.title ? "text-red-700 font-bold scale-105" : "text-gray-600"
                                    }`}
                            >
                                <h4>{item.title}</h4>
                                <p className="text-sm">{item.subtitle}</p>
                            </button>
                        ))}
                    </div>
                </div>


                {/* Main Content */}
                <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg flex-1 relative transition-transform duration-500 ease-in-out transform">


                    <h4 className="text-red-700 font-bold">{activeTab}</h4>
                    <h2 className="text-3xl font-bold mt-2">Invest in Your Future, Start Saving.</h2>
                    <p className="text-gray-700 mt-2">
                        Every pleasure is to be welcomed, and every pain avoided. The wise
                        man therefore always holds in these matters.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-6">
                        <div>
                            <h3 className="text-2xl font-bold">3.2k</h3>
                            <p className="text-gray-600">Live Savings Accounts</p>
                            <p className="text-green-600 font-bold">↑ 2.6% IN LFY</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">$2b</h3>
                            <p className="text-gray-600">In Customer Savings</p>
                            <p className="text-green-600 font-bold">↑ 4.5% IN LFY</p>
                        </div>
                    </div>

                    <button className="bg-red-700 text-white px-6 py-3 mt-4 rounded-lg font-bold w-full md:w-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                        → Explore Options
                    </button>
                </div>

                {/* Digital Opening Form */}
                <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full lg:w-1/3">
                    <h3 className="text-lg font-bold mb-4">Digital Opening</h3>
                    <div>
                        <div className="flex items-center border border-gray-400 rounded p-3 mb-3 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <FaUser className="text-red-500" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="ml-2 flex-1 bg-transparent focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border border-gray-400 rounded p-3 mb-3 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <FaEnvelope className="text-red-500" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="ml-2 flex-1 bg-transparent focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border border-gray-400 rounded p-3 mb-3 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <FaPhoneAlt className="text-red-500" />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="ml-2 flex-1 bg-transparent focus:outline-none"
                            />
                        </div>
                        <button className="bg-red-700 text-white px-6 py-3 w-full rounded-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-105">
                            → Proceed to Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomBankingSection;
