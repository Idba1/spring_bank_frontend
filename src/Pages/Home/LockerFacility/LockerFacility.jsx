import { FaCheckCircle } from "react-icons/fa";

const LockerFacility = () => {
    return (
        <div className="w-full bg-white py-12 px-4 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-red-800 font-semibold flex items-center space-x-2">
                        <span className="w-6 h-1 bg-red-800"></span> <span>LOCKER FACILITY</span>
                    </p>
                    <h2 className="text-3xl font-bold mt-2">
                        Ultimate Locker Solution <br /> for Valuables
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Frequently occur that pleasures have to be repudiated and annoyances accepted—the wise man always holds.
                    </p>

                    <p className="text-red-800 font-semibold mt-4">
                        ✦ Affordable Security, Check our Locker{" "}
                        <span className="font-bold underline cursor-pointer">Pricing.</span>
                    </p>

                    {/* Key Features */}
                    <div className="bg-gray-100 p-4 rounded-lg mt-6 flex flex-col sm:flex-row justify-around items-center text-center">
                        <div className="flex items-center space-x-2">
                            <FaCheckCircle className="text-red-800" />
                            <p className="text-gray-700">Available in Different Sizes.</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                            <FaCheckCircle className="text-red-800" />
                            <p className="text-gray-700">Affordable Rental Plans.</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="bg-red-900 text-white font-semibold px-6 py-3 mt-6 rounded-lg flex items-center space-x-2">
                        <span>→</span>
                        <span>Locker Request</span>
                    </button>
                </div>

                {/* Image */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img
                        src="https://i.ibb.co.com/bgxf7cdf/locker-1-1.jpg"
                        alt="Locker"
                        className="rounded-lg w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default LockerFacility;