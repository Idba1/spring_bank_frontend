import { useState } from "react";
import { Slider } from "@mui/material";
import { FaCalculator } from "react-icons/fa";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const calculateEMI = () => {
    let monthlyRate = interestRate / 100 / 12;
    let months = loanTerm * 12;
    let emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return emi.toFixed(2);
  };

  return (
    <div className="flex w-full bg-gray-100 p-10">
      {/* Left Section */}
      <div className="w-1/3 flex items-center">
        <img src="https://i.ibb.co.com/gLvvdhYn/men-2-1.png" alt="Loan Calculator" className="w-full" />
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-white p-10 rounded-lg shadow-md">
        {/* Navigation */}
        <div className="flex gap-5 border-b pb-3 text-red-800 font-bold">
          <span className="border-b-2 border-red-800">Home Loan</span>
          <span>Vehicle Loan</span>
          <span>Personal Loan</span>
          <span>Education Loan</span>
          <span>Mortgage Loan</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mt-5">Flexible Online Loan Calculator</h2>
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
          <div className="flex justify-between text-sm text-gray-600">
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
          <div className="flex justify-between text-sm text-gray-600">
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
          <div className="flex justify-between text-sm text-gray-600">
            <span>6%</span>
            <span>18%</span>
          </div>
        </div>

        {/* EMI Calculation */}
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
          <p className="font-semibold">Interest Amount</p>
          <p className="text-lg">${(calculateEMI() * loanTerm * 12).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}