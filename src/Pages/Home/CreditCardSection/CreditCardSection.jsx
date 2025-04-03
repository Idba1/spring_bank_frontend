import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CreditCardSection = () => {
    const [activeTab, setActiveTab] = useState("Rewards Cards");
    const cardTypes = ["Rewards Cards", "Cashback Cards", "Travel Cards"];

    return (
        <div className="bg-[#4A0E0E] text-white py-10 px-6 md:px-10 flex flex-col lg:flex-row gap-10 items-center justify-center">
            {/* Left Side - Credit Card Image */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105 mb-6 lg:mb-0">
                {/* Cashback Up to Text */}
                <div className="absolute top-[-10px] right-[-10px] bg-white text-black px-3 py-1 rounded shadow text-sm z-10">
                    Cashback Up to: 25%
                </div>
                <img
                    src="https://i.ibb.co.com/VYPMc7RN/card-1-2.png"
                    alt="Credit Card"
                    className="w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
                />
                {/* APR Text */}
                <div className="absolute bottom-[-20px] left-0 bg-white text-black px-3 py-1 rounded shadow text-sm z-10">
                    Average APR: 5.50%
                </div>
            </div>


            {/* Right Side - Text & Form */}
            <div className="max-w-lg text-center lg:text-left">
                <h4 className="text-sm text-red-400">CREDIT CARD</h4>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2 animate__animated animate__fadeIn animate__delay-1s">
                    Discover Our Range of <br /> Credit Cards
                </h2>

                {/* Tabs for card types */}
                <div className="flex flex-wrap justify-center lg:justify-start space-x-2 mt-4">
                    {cardTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveTab(type)}
                            className={`px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 ${activeTab === type
                                    ? "bg-red-600 text-white"
                                    : "bg-gray-700 text-gray-300 hover:bg-red-500 hover:text-white"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-300 text-xs sm:text-sm md:text-base">
                    Business it will frequently occur that pleasures have to be repudiated
                    and annoyances accepted. The wise man therefore always holds in these matters.
                </p>
                <a
                    href="#"
                    className="text-red-400 mt-3 inline-block font-bold text-sm sm:text-base hover:text-white transition-colors"
                >
                    → Explore Cards
                </a>

                {/* Phone Input Form */}
                <div className="mt-6 flex items-center border border-gray-400 rounded overflow-hidden w-full max-w-md mx-auto lg:mx-0">
                    <span className="px-3 bg-gray-700 text-gray-300">
                        <FaPhoneAlt />
                    </span>
                    <input
                        type="text"
                        placeholder="Phone Number..."
                        className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-white placeholder-gray-400"
                    />
                    <button className="bg-red-600 px-1 py-2 text-white hover:bg-red-500 transition-all">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreditCardSection;
