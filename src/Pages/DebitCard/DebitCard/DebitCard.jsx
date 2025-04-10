import React from 'react';

const cards = [
    {
        title: 'Platinum Credit Card',
        image: 'https://i.ibb.co.com/kgWS3Cf2/card-1-2.png',
        benefits: ['Reward Points', 'Fuel Surcharge Waiver', 'Airport Lounge Access'],
    },
    {
        title: 'Millennia Credit Card',
        image: 'https://i.ibb.co.com/XZJ1VykD/cards-1-1.jpg',
        benefits: ['Cashback Offers', 'Fuel Surcharge Waiver', 'Dining Benefits'],
    },
    {
        title: 'Money Back Credit Card',
        image: 'https://i.ibb.co/5hLGwGGY/cards-2-1.jpg',
        benefits: ['Personalized spends', 'Cashback & Reward Points', 'Dining & Lifestyle Benefits'],
    },
    {
        title: 'Easy EMI Credit Card',
        image: 'https://i.ibb.co/DPn4nDJQ/cards-3-1.jpg',
        benefits: ['Convert spends to EMIs', 'Reward Points', 'Welcome Benefits'],
    },
    {
        title: 'Diners Club Privilege Card',
        image: 'https://i.ibb.co/1YXZSWGy/cards-4-1.jpg',
        benefits: ['Lounge Access', 'Global Benefits', 'Dining Privileges'],
    },
    {
        title: 'Signature Credit Card',
        image: 'https://i.ibb.co/Dg13rdx0/cards-5-1.jpg',
        benefits: ['Low Interest Rate', 'Travel Perks', 'Lifestyle Discounts'],
    },
];

export default function DebitCard() {
    return (
        <div>
            {/* Banner Image */}
            < div className="mb-8" >
                <img
                    src="https://i.ibb.co/vx3C3kW3/debit-card.png"
                    alt="Debit Card"
                    className="w-full rounded-lg shadow-md object-cover"
                />
            </div >

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">


                {/* Hero Section */}
                <div className="bg-[#f5f5f5] p-6 md:p-10 rounded-lg flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800">More than just a card—It’s freedom…</h2>
                        <p className="mt-3 text-gray-600">Apply instantly and enjoy no obligations.</p>
                        <ul className="list-disc list-inside text-sm mt-4 text-gray-500 space-y-1">
                            <li>Dining Offers</li>
                            <li>Reward Points</li>
                            <li>Personalized Benefits</li>
                            <li>Flexible Credit Limits</li>
                        </ul>
                        <button className="mt-5 px-5 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition">
                            Register Now
                        </button>
                    </div>
                    <img
                        src="https://i.ibb.co/XrxqC8Cf/card-1-1-1.png"
                        alt="Card"
                        className="w-64 rounded shadow-md object-contain"
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-1/4 w-full space-y-8">
                        {/* Card Types Table-Style List */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <h3 className="text-xl font-semibold px-5 pt-5 pb-3 text-gray-800 border-b">Card Types</h3>
                            <div className="divide-y text-sm text-gray-700">
                                {[
                                    'Platinum Card',
                                    'Millennia Card',
                                    'Money Back Card',
                                    'Easy EMI Card',
                                    'Diners Club Privilege',
                                    'Signature Card',
                                ].map((type, i) => (
                                    <div
                                        key={i}
                                        className="px-5 py-3 cursor-pointer transition-all duration-200 hover:bg-red-600 hover:text-white"
                                    >
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <a href="/apply">
                                <img src="https://i.ibb.co.com/Css755ZM/card.png" alt="Credit Card" className="cursor-pointer" />
                            </a>
                        </div>


                        {/* Apply Now Box */}
                        {/* <div className="p-6 bg-[#f8f9fa] text-center rounded-lg shadow-sm border border-gray-200">
                            <p className="font-semibold text-gray-800 mb-4 leading-relaxed">
                                Now, Get Your Credit Card Online
                            </p>
                            <button className="bg-red-600 text-white px-5 py-2 text-sm rounded hover:bg-red-700 transition-all">
                                Apply Now
                            </button>
                        </div> */}
                    </aside>


                    {/* Cards Display */}
                    <div className="lg:w-3/4 grid grid-cols-1 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-5 shadow-sm flex flex-col md:flex-row gap-6 bg-white"
                            >
                                <div className="md:w-1/3 flex flex-col items-center">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-40 object-cover rounded"
                                    />
                                    <div className="mt-4 flex justify-between w-full gap-2">
                                        <button className="text-white bg-red-600 px-4 py-1 text-sm rounded w-full hover:bg-red-700 transition">
                                            Apply Now
                                        </button>
                                        <button className="text-sm text-gray-700 border border-gray-300 px-4 py-1 rounded w-full hover:bg-gray-100 transition">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Personalized experiences and powerful savings.
                                    </p>
                                    <h5 className="font-medium text-gray-700 mb-2">Features & Benefits</h5>
                                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                        {card.benefits.map((benefit, i) => (
                                            <li key={i}>{benefit}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-3 text-sm text-blue-600 cursor-pointer hover:underline">
                                        + Add to Compare
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}
