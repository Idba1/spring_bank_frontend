import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        { question: "How do I open a new account?", answer: "Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures." },
        { question: "How can I check my account balance?", answer: "You can check your account balance via online banking, mobile apps, or visiting your nearest branch." },
        { question: "Is online banking secure?", answer: "Yes, online banking is secure with encryption, two-factor authentication, and fraud monitoring." },
        { question: "What is the daily ATM withdrawal limit?", answer: "The daily ATM withdrawal limit varies by account type and bank policies." },
        { question: "How do I apply for a loan?", answer: "You can apply for a loan online, at a bank branch, or through customer support assistance." },
        { question: "How do I open a new account?", answer: "Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures." },
        { question: "How can I check my account balance?", answer: "You can check your account balance via online banking, mobile apps, or visiting your nearest branch." },
        { question: "Is online banking secure?", answer: "Yes, online banking is secure with encryption, two-factor authentication, and fraud monitoring." },
    ];

    const categories = [
        "Account",
        "Online Banking",
        "Mobile Banking",
        "Deposits",
        "Withdrawals",
        "Loans",
        "Business",
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div>
                <img src="https://i.ibb.co.com/v6D6VHC5/faq.png" alt="" />
            </div>

            <div className="bg-gray-100 py-12 px-6 md:px-20">

                {/* Header */}
                {/* <div className="text-center">
                    <p className="text-red-600 font-semibold uppercase">FAQ’S</p>
                    <h2 className="text-3xl font-bold text-gray-900">Read Questions & Answers</h2>
                </div> */}

                <div className="mt-8 flex flex-col md:flex-row gap-6">
                    {/* Left Sidebar - Categories */}
                    <div className="bg-white p-6 shadow-md w-full md:w-1/3 rounded-lg h-64">
                        <h3 className="text-lg font-bold mb-2">Categories</h3>
                        <p className="text-sm text-gray-600 mb-4">Wide range of topics to address common queries.</p>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 px-3 py-1 text-sm rounded-md cursor-pointer hover:bg-gray-300 transition"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 text-red-600 font-semibold flex items-center gap-2 cursor-pointer">
                            <span>📩 Can't Find What You Need?</span>
                            <a href="#" className="underline">Submit Queries</a>
                        </div>
                    </div>

                    {/* Right Section - FAQ List */}
                    <div className="w-full md:w-2/3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-md overflow-hidden mb-3 ${activeIndex === index ? "bg-red-900 text-white" : "bg-white text-black"}`}
                            >
                                <div
                                    className="flex justify-between items-center px-6 py-4 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`font-bold ${activeIndex === index ? "text-white" : "text-gray-600"}`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="font-semibold">{faq.question}</p>
                                    </div>
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {activeIndex === index && (
                                    <div className="px-6 py-3 text-sm">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FAQSection;