import { useState } from "react";
import { Slider } from "@mui/material";
import { FaCalculator } from "react-icons/fa";

export default function LoanCalculator() {
    const [loanAmount, setLoanAmount] = useState(50000);
    const [loanTerm, setLoanTerm] = useState(20);
    const [interestRate, setInterestRate] = useState(8.5);
    const [activeTab, setActiveTab] = useState("homeLoan");

    const calculateEMI = () => {
        let monthlyRate = interestRate / 100 / 12;
        let months = loanTerm * 12;
        let emi =
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);
        return emi.toFixed(2);
    };

    const loanTabs = {
        homeLoan: { title: "Home Loan", data: "Dummy data for Home Loan" },
        vehicleLoan: { title: "Vehicle Loan", data: "Dummy data for Vehicle Loan" },
        personalLoan: { title: "Personal Loan", data: "Dummy data for Personal Loan" },
        educationLoan: { title: "Education Loan", data: "Dummy data for Education Loan" },
        mortgageLoan: { title: "Mortgage Loan", data: "Dummy data for Mortgage Loan" },
    };

    return (
        <div className="flex flex-col md:flex-row w-full bg-gray-100 p-5 md:p-10">
            {/* Left Section - Image */}
            <div className="w-full md:w-1/3 flex items-center justify-center">
                <img
                    src="https://i.ibb.co.com/gLvvdhYn/men-2-1.png"
                    alt="Loan Calculator"
                    className="w-full max-w-xs md:max-w-full"
                />
            </div>

            {/* Right Section - Loan Calculator */}
            <div className="w-full md:w-2/3 bg-white p-5 md:p-10 rounded-lg shadow-md">

                {/* Responsive Navigation Tabs */}
                <div className="flex flex-wrap gap-3 border-b pb-3 text-red-800 font-bold">
                    {Object.keys(loanTabs).map((tab) => (
                        <span
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer p-2 rounded-md text-sm sm:text-base transition ${activeTab === tab
                                    ? "bg-red-800 text-white"
                                    : "text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {loanTabs[tab].title}
                        </span>
                    ))}
                </div>

                {/* Loan Calculator Title */}
                <h2 className="text-2xl md:text-3xl font-bold mt-5">Flexible Online Loan Calculator</h2>
                <p className="text-gray-600 mt-2">
                    Estimate your loan payments quickly & easily with our calculator.
                </p>

                {/* Loan Amount */}
                <div className="mt-5">
                    <label className="text-lg font-semibold">Loan Amount</label>
                    <Slider
                        value={loanAmount}
                        onChange={(e, val) => setLoanAmount(val)}
                        min={50000}
                        max={2500000}
                        step={50000}
                    />
                    <div className="flex justify-between text-xs md:text-sm text-gray-600">
                        <span>$50,000</span>
                        <span>$2.5 million</span>
                    </div>
                </div>

                {/* Loan Term */}
                <div className="mt-5">
                    <label className="text-lg font-semibold">Loan Term (Years)</label>
                    <Slider
                        value={loanTerm}
                        onChange={(e, val) => setLoanTerm(val)}
                        min={1}
                        max={40}
                        step={1}
                    />
                    <div className="flex justify-between text-xs md:text-sm text-gray-600">
                        <span>1 Year</span>
                        <span>40 Years</span>
                    </div>
                </div>

                {/* Interest Rate */}
                <div className="mt-5">
                    <label className="text-lg font-semibold">Interest Rate</label>
                    <Slider
                        value={interestRate}
                        onChange={(e, val) => setInterestRate(val)}
                        min={6}
                        max={18}
                        step={0.1}
                    />
                    <div className="flex justify-between text-xs md:text-sm text-gray-600">
                        <span>6%</span>
                        <span>18%</span>
                    </div>
                </div>

                {/* EMI Calculation Section */}
                <div className="mt-8 bg-red-600 text-white p-5 text-center rounded-lg">
                    <FaCalculator size={40} className="mx-auto mb-2" />
                    <p className="text-lg">Monthly EMI</p>
                    <h2 className="text-3xl font-bold">${calculateEMI()}</h2>
                    <button className="bg-white text-red-600 px-4 py-2 mt-4 rounded-md font-semibold">
                        Apply Online
                    </button>
                </div>

                {/* Interest Amount */}
                <div className="mt-5 text-gray-700">
                    <p className="font-semibold">Total Interest Amount</p>
                    <p className="text-lg">${(calculateEMI() * loanTerm * 12).toFixed(2)}</p>
                </div>

                {/* Display Tab Data */}
                <div className="mt-5 p-5 bg-gray-100 rounded-lg text-center text-gray-700">
                    <p className="font-semibold">{loanTabs[activeTab].data}</p>
                </div>
            </div>
        </div>
    );
}
