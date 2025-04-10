import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const About = () => {
    return (
        <div className="bg-white text-gray-800">
            <section>
                <img src="https://i.ibb.co.com/vxtKbdWL/why-choose-us.png" alt="" />
            </section>
            {/* Section: Header */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Explore Our Journey & Core Beliefs</h2>
                        <p className="mb-6 text-lg">
                            On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Wide Range of Financial Products</li>
                            <li>Customer Satisfaction Focus</li>
                            <li>Extensive Branch & ATM Network</li>
                            <li>Robust Security Measures</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {/* <img src="https://i.ibb.co.com/nsvgCYWt/icon-196.png" alt="team" className="rounded-lg" /> */}
                        <div className="flex flex-col items-center justify-center bg-red-600 text-white rounded-lg p-6">
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm mt-2 text-center">Branches Across Country</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-red-600 text-white rounded-lg p-6">
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm mt-2 text-center">Branches Across Country</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-red-600 text-white rounded-lg p-6">
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm mt-2 text-center">Branches Across Country</p>
                        </div>
                        {/* <div className="relative rounded-lg overflow-hidden">
                            <img src="https://i.ibb.co.com/nsvgCYWt/icon-196.png" alt="video" className="w-full h-full object-cover" />
                            <FaPlayCircle className="absolute text-white text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Section: Statistics */}
            <section className="bg-gray-100 py-12 px-4 text-center grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-4xl font-bold">0.5m</h3>
                    <p className="text-gray-600">Transactions Processed Daily</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold">10,000+</h3>
                    <p className="text-gray-600">ATMs and Branches Globally</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold">0.5m</h3>
                    <p className="text-gray-600">Transactions Processed Daily</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold">10,000+</h3>
                    <p className="text-gray-600">ATMs and Branches Globally</p>
                </div>
            </section>

            {/* Section: Purpose and Principles */}
            <section className="py-16 px-4 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Our Purpose and Principles</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <img src="https://i.ibb.co.com/jv0ycP7W/about-1.jpg" alt="mission" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p>Fugit ratione facere id itaque aut odio aut. Nam maiores eveniet alias dolorum quasi aut unde eos nesciunt?</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <img src="https://i.ibb.co.com/mCcF8GNq/about-2.png" alt="mission" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p>Fugit ratione facere id itaque aut odio aut. Nam maiores eveniet alias dolorum quasi aut unde eos nesciunt?</p>
                    </div>
                    {/* <div className="bg-red-600 text-white p-6 shadow rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
                        <ul className="space-y-1">
                            <li>Integrity</li>
                            <li>Customer Focus</li>
                            <li>Innovation</li>
                            <li>Teamwork</li>
                            <li>Accountability</li>
                            <li>Sustainability</li>
                        </ul>
                    </div> */}
                    <div className="bg-white p-6 shadow rounded-lg">
                        <img src="https://i.ibb.co.com/jv0ycP7W/about-1.jpg" alt="vision" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                        <p>Fugit ratione facere id itaque aut odio aut. Nam maiores eveniet alias dolorum quasi aut unde eos nesciunt?</p>
                    </div>
                </div>
            </section>

            {/* Section: Awards */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Prestigious Awards and Honors</h2>

                {/* Awards Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <img
                        src="https://i.ibb.co.com/Wp7pYFKt/63621c67209f6fec1b1df54ecc4d77f2.jpg"
                        alt="Award 1"
                        className="rounded-lg w-full h-56 object-cover shadow"
                    />
                    <img
                        src="https://i.ibb.co.com/hRVLC39q/a-1.jpg"
                        alt="Award 2"
                        className="rounded-lg w-full h-56 object-cover shadow"
                    />
                    <img
                        src="https://i.ibb.co.com/5XmCDRJz/a-2.jpg"
                        alt="Award 3"
                        className="rounded-lg w-full h-56 object-cover shadow"
                    />

                </div>

                {/* Award Descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow text-center">
                        <img
                            src="https://i.ibb.co/v4LtZZ6k/award-2-1-1.png"
                            alt="Award Icon"
                            className="mx-auto mb-4 h-16 w-16 object-contain"
                        />
                        <h3 className="text-2xl font-semibold mb-2">Best Bank of the Year</h3>
                        <p className="text-gray-700">Recognized for Excellence in Banking Services</p>
                        <span className="block mt-3 text-sm text-gray-500">2023, National Award Committee</span>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow text-center">
                        <img
                            src="https://i.ibb.co/v4LtZZ6k/award-2-1-1.png"
                            alt="Award Icon"
                            className="mx-auto mb-4 h-16 w-16 object-contain"
                        />
                        <h3 className="text-2xl font-semibold mb-2">Best Customer Service Award</h3>
                        <p className="text-gray-700">Awarded for High Customer Satisfaction</p>
                        <span className="block mt-3 text-sm text-gray-500">2023, Global Finance</span>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow text-center">
                        <img
                            src="https://i.ibb.co/v4LtZZ6k/award-2-1-1.png"
                            alt="Award Icon"
                            className="mx-auto mb-4 h-16 w-16 object-contain"
                        />
                        <h3 className="text-2xl font-semibold mb-2">Best Customer Service Award</h3>
                        <p className="text-gray-700">Awarded for High Customer Satisfaction</p>
                        <span className="block mt-3 text-sm text-gray-500">2023, Global Finance</span>
                    </div>
                </div>
            </section>

            {/* Section: Header */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Explore Our Journey & Core Beliefs</h2>
                        <p className="mb-6 text-lg">
                            On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Wide Range of Financial Products</li>
                            <li>Customer Satisfaction Focus</li>
                            <li>Extensive Branch & ATM Network</li>
                            <li>Robust Security Measures</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {/* <img src="https://i.ibb.co.com/nsvgCYWt/icon-196.png" alt="team" className="rounded-lg" /> */}
                        <div className="flex flex-col items-center justify-center bg-red-600 text-white rounded-lg p-6">
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm mt-2 text-center">Branches Across Country</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-red-600 text-white rounded-lg p-6">
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm mt-2 text-center">Branches Across Country</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-red-600 text-white rounded-lg p-6">
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm mt-2 text-center">Branches Across Country</p>
                        </div>
                        {/* <div className="relative rounded-lg overflow-hidden">
                            <img src="https://i.ibb.co.com/nsvgCYWt/icon-196.png" alt="video" className="w-full h-full object-cover" />
                            <FaPlayCircle className="absolute text-white text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div> */}
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default About;
