import React from 'react';
import { FaCalendarAlt, FaUser, FaComments, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const News = () => {
    return (
        <div>
            <section>
                <img src="https://i.ibb.co.com/GQVD4g1v/news.png" alt="" />
            </section>
            <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">

                    {/* Article Header */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><FaCalendarAlt /> Jan 14, 2024</span>
                            <span className="flex items-center gap-1"><FaUser /> Admin</span>
                            <span className="flex items-center gap-1"><FaComments /> 0 Comments</span>
                        </div>
                        <img src="https://i.ibb.co.com/C3T08WCV/news-25-1.jpg" alt="Article" className="w-full rounded-md" />
                    </div>

                    {/* Article Content */}
                    <div className="space-y-6">
                        <p className="text-lg">
                            Credit scores are vital when it comes to loans and other financial matters. A good score makes it easier to qualify for loans, often at better interest rates.
                        </p>
                        <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600">
                            Boost your credit score fast with these proven tips and tricks from financial experts!
                        </blockquote>
                        <h2 className="text-2xl font-semibold">Pay Your Bills on Time</h2>
                        <p className="text-lg">This is one of the most significant factors affecting your credit score.</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Set Up Payment Reminders</li>
                            <li>Create a Budget</li>
                        </ul>

                        <h2 className="text-2xl font-semibold">Limit New Credit Applications</h2>
                        <p className="text-lg">Applying for multiple new credit accounts in a short time can hurt your credit score.</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Understand the Application Process</li>
                            <li>Check Your Report Regularly</li>
                            <li>Minimize Hard Pull Applications</li>
                            <li>Track Credit Utilization</li>
                        </ul>
                    </div>

                    {/* Tags & Author */}
                    <div className="border-t pt-6 mt-6 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Accounts</span>
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Mobile Banking</span>
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Online Banking</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <img src=" https://i.ibb.co.com/TMTRH2CW/e7b9b29c4fdd4d4ec28699064fe80204.png" alt="Author" className="w-16 h-16 rounded-full" />
                            <div>
                                <h4 className="font-semibold">admin</h4>
                                <p className="text-sm text-gray-600">Writes on topics covering credit, savings, digital banking and more.</p>
                                <a href="#" className="text-red-600 text-sm font-medium">+ Read All Posts</a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between text-red-600 text-sm font-medium mt-8">
                        <a href="#" className="flex items-center gap-1"><FaArrowLeft /> Prev Post</a>
                        <a href="#" className="flex items-center gap-1">Next Post <FaArrowRight /></a>
                    </div>

                    {/* Comment Form */}
                    <div className="mt-12">
                        <h3 className="text-xl font-semibold mb-4">Leave A Comment</h3>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="border px-4 py-2 w-full rounded" />
                                <input type="email" placeholder="Email" className="border px-4 py-2 w-full rounded" />
                            </div>
                            <textarea placeholder="Type Comment Here..." className="border px-4 py-2 w-full h-32 rounded"></textarea>
                            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Post Comment</button>
                        </form>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Search */}
                    <div>
                        <input type="text" placeholder="Search..." className="w-full px-4 py-2 border rounded" />
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold mb-2">Categories</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li><a href="#" className="hover:text-red-600">Accounts</a></li>
                            <li><a href="#" className="hover:text-red-600">Credit & Loan</a></li>
                            <li><a href="#" className="hover:text-red-600">Financial Planning</a></li>
                            <li><a href="#" className="hover:text-red-600">Savings</a></li>
                        </ul>
                    </div>

                    {/* Popular Posts */}
                    <div>
                        <h4 className="font-semibold mb-2">Popular Post</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600">More is to improve</a></li>
                            <li><a href="#" className="hover:text-red-600">Your Credit Score</a></li>
                            <li><a href="#" className="hover:text-red-600">The Future of Financial Tech</a></li>
                        </ul>
                    </div>

                    {/* Tags */}
                    <div>
                        <h4 className="font-semibold mb-2">Popular Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Credit</span>
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Loans</span>
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Mobile Banking</span>
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Withdraw</span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

    );
};

export default News;
