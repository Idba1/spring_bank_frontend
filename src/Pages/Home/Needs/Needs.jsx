import { FaMoneyBillWave, FaUserCog, FaBuilding, FaUsers, FaCheckCircle, FaDownload } from "react-icons/fa";

const carouselItems = [
    {
        title: "Fixed Deposit",
        description: "Higher Returns & Security.",
        icon: <FaMoneyBillWave />,
    },
    {
        title: "Accounts",
        description: "Duty the obligations business.",
        icon: <FaUserCog />,
    },
    {
        title: "Investments",
        description: "Secure you & your family.",
        icon: <FaBuilding />,
    },
    {
        title: "Family 360",
        description: "Complete banking solutions.",
        icon: <FaUsers />,
    },
    {
        title: "Investments",
        description: "Secure you & your family.",
        icon: <FaBuilding />,
    },
    {
        title: "Family 360",
        description: "Complete banking solutions.",
        icon: <FaUsers />,
    },
];

const Needs = () => {
    return (
        <div className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
            {/* Header Section */}
            <div className="text-center mb-8">
                <p className="text-red-800 font-semibold uppercase">Custom Banking</p>
                <h2 className="text-3xl font-bold">Banking For Your Needs</h2>
            </div>

            {/* Carousel Section */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hidden lg:block">
                <div className="flex flex-wrap justify-center gap-6">
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="text-center w-40 sm:w-48 transition-all transform hover:scale-105 hover:bg-red-100 p-6 rounded-lg shadow-md bg-white hover:shadow-xl"
                        >
                            <div className="bg-red-800 p-6 rounded-full mb-3 flex justify-center items-center text-white">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Fixed Deposit Section */}
            <div className="flex flex-col md:flex-row mt-12 items-center justify-center gap-8">
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.ibb.co/bg65M1kG/banking-1-1.jpg"
                        alt="Fixed Deposit"
                        className="rounded-lg w-full"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-4">
                    <h3 className="text-2xl font-bold text-gray-800">Fixed Deposit</h3>
                    <p className="text-gray-600 my-4">
                        Beguiled and demoralized by the charms of pleasure, so blinded by desire that they cannot foresee the end.
                    </p>
                    <h4 className="text-red-800 font-semibold">KEY BENEFITS:</h4>
                    <ul className="mt-4 space-y-2">
                        {["100% Guaranteed returns", "Loan against FD available", "Flexible tenure options"].map((benefit, index) => (
                            <li key={index} className="flex items-center space-x-2 text-gray-700">
                                <FaCheckCircle className="text-red-800" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Download Section */}
                    <div className="bg-gray-100 p-4 rounded-lg mt-6 flex items-center justify-between shadow-md">
                        <div>
                            <p className="font-bold">Guide to Fixed Deposits</p>
                            <p className="text-sm text-gray-500">PDF 6.8MB</p>
                        </div>
                        <button className="bg-red-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-900 transition duration-300">
                            <FaDownload />
                            <span>Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Needs;
