import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};

const defaultCenter = {
    lat: -33.8688,
    lng: 151.2093,
};

const GetInTouch = () => {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div>
            <div>
                <img src="https://i.ibb.co.com/fG23HgzQ/get-in-touch.png" alt="" />
            </div>
            <div className="max-w-6xl mx-auto py-10 px-4">


                {/* Corporate Team Section */}
                <section className="my-10 bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-xl font-semibold text-red-600">Connect with Corporate Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
                        <div className="bg-white p-5 shadow rounded-lg">
                            <h3 className="font-semibold">Eve Liu</h3>
                            <p>Corporate Banking Services</p>
                            <p className="text-gray-600">+880 123 456 789</p>
                        </div>
                        <div className="bg-white p-5 shadow rounded-lg">
                            <h3 className="font-semibold">Mika Ali</h3>
                            <p>Head of Corporate Unit</p>
                            <p className="text-gray-600">mika@example.com</p>
                        </div>
                        <div className="bg-white p-5 shadow rounded-lg">
                            <h3 className="font-semibold">Address</h3>
                            <p>10th St, Melbourne VIC, Australia</p>
                        </div>
                        <div className="bg-white p-5 shadow rounded-lg">
                            <h3 className="font-semibold">Banking Hours</h3>
                            <p>Mon-Fri: 9AM - 5PM</p>
                        </div>
                    </div>
                </section>

                {/* Google Maps Section */}
                <section className="my-10">
                    <h2 className="text-xl font-semibold text-red-600">Over 200 Branches & ATMs Nationwide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-5">
                        <div className="bg-red-900 text-white p-5 rounded-lg">
                            <h3 className="font-semibold">Find a Branch or ATM</h3>
                            <select className="mt-3 p-2 w-full bg-white text-black rounded">
                                <option>Select a City</option>
                                <option>Sydney</option>
                                <option>Melbourne</option>
                            </select>
                            <button className="mt-3 bg-white text-red-900 p-2 rounded w-full">Find My Way</button>
                        </div>
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={12}>
                                <Marker position={defaultCenter} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </section>

                {/* Support Team Form */}
                <section className="my-10 bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-xl font-semibold text-red-600">Message Our Support Team</h2>
                    <div className="mt-5">
                        <div className="flex flex-wrap space-x-4 mb-5">
                            <button
                                className={`p-2 ${activeTab === "personal" ? "bg-red-600 text-white" : "bg-gray-300"} rounded mb-3 md:mb-0`}
                                onClick={() => setActiveTab("personal")}
                            >
                                Personal Banking
                            </button>
                            <button
                                className={`p-2 ${activeTab === "corporate" ? "bg-red-600 text-white" : "bg-gray-300"} rounded mb-3 md:mb-0`}
                                onClick={() => setActiveTab("corporate")}
                            >
                                Corporate Banking
                            </button>
                        </div>

                        <form className="mt-5 bg-white p-5 shadow rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="p-3 border rounded w-full" />
                                <input type="email" placeholder="Email" className="p-3 border rounded w-full" />
                                <input type="tel" placeholder="Phone" className="p-3 border rounded w-full" />
                                <input type="text" placeholder="Reason for Contact" className="p-3 border rounded w-full" />
                            </div>
                            <textarea placeholder="Message" className="mt-3 p-3 border rounded w-full"></textarea>
                            <button className="mt-3 bg-red-600 text-white p-3 w-full rounded">Send Your Message</button>
                        </form>
                    </div>
                </section>

                {/* Customer Care Section */}
                <section className="my-10">
                    <h2 className="text-xl font-semibold text-red-600">Connect with Customer Care</h2>
                    <div className="bg-white p-5 shadow rounded-lg mt-5">
                        <table className="w-full border-collapse border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-3 border">Services</th>
                                    <th className="p-3 border">Contact Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border">Services</td>
                                    <td className="p-3 border">+880 123 456 789 (24/7)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border">Credit Card</td>
                                    <td className="p-3 border">+880 987 654 321</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <p className="text-center mt-5">
                    <a href="#" className="text-red-600 font-semibold">More CustomerCare Details</a>
                </p>
            </div>
        </div>
    );
};

export default GetInTouch;
