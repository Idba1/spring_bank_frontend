const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 text-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Left Section */}
                    <div>
                        <div className="bg-red-900 text-white p-4 rounded">
                            <p className="font-semibold">Certified for Quality Management Excellence.</p>
                            <p className="text-sm">2000-2001</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Enquiry</h3>
                            <p>0800-896-1234 (Toll Free) <span className="text-gray-500">Personal</span></p>
                            <p>+49-69-1234-5678 <span className="text-gray-500">Corporate</span></p>
                            <p className="mt-2 font-semibold">info@example.com</p>
                            <p className="text-gray-500 text-sm">Send your queries.</p>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div>
                        <h3 className="font-semibold">Banking Hours</h3>
                        <p>9.00am to 5.00pm <span className="text-gray-500">Mon - Friday</span></p>
                        <p>9.00am to 2.00pm <span className="text-gray-500">Saturday</span></p>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold">Our Bank</h3>
                            <ul className="text-sm space-y-2">
                                <li>Credit Card</li>
                                <li>Debit Card</li>
                                <li>Easy EMI Card</li>
                                <li>Platinum Card</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Products</h3>
                            <ul className="text-sm space-y-2">
                                <li>About Us</li>
                                <li>All Cards</li>
                                <li>Business Account</li>
                                <li>Careers</li>
                                <li>Debit Card</li>
                                <li>Demat Account</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-gray-200 py-2 px-4 rounded flex items-center justify-center">
                        Branches & ATMs
                    </button>
                    <button className="bg-gray-200 py-2 px-4 rounded flex items-center justify-center">
                        Complaint Registration
                    </button>
                    <button className="bg-gray-200 py-2 px-4 rounded flex items-center justify-center">
                        Download Forms
                    </button>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t pt-4 text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="#" className="text-gray-700 text-lg">Facebook</a>
                        <a href="#" className="text-gray-700 text-lg">X</a>
                        <a href="#" className="text-gray-700 text-lg">Instagram</a>
                        <a href="#" className="text-gray-700 text-lg">LinkedIn</a>
                    </div>
                    <p className="font-semibold text-xl">Flexibank</p>
                    <p className="text-gray-500 text-sm">copyrights © 2024 Flexibank. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-6 mt-2">
                        <a href="#" className="text-gray-500 text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 text-sm">Terms & Conditions</a>
                        <a href="#" className="text-gray-500 text-sm">Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
