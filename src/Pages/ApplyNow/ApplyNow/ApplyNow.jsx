import React from 'react'

const ApplyNow = () => {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co.com/yFrNHXxL/apply.png" alt="" />
            </div>
            <div className="max-w-5xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold mb-8">Apply Now</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                        <label className="block font-medium mb-1">
                            First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your first name here"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block font-medium mb-1">
                            Last Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your last name here"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block font-medium mb-1">
                            Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Example: +1 212-695-1962"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block font-medium mb-1">
                            Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Example: user@website.com"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Address Line 1 */}
                    <div>
                        <label className="block font-medium mb-1">
                            Address Line 1 <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block font-medium mb-1">
                            Date of Birth <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="date"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Zip Code */}
                    <div>
                        <label className="block font-medium mb-1">
                            Zip Code <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Example: 12207"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block font-medium mb-1">
                            Country <span className="text-red-600">*</span>
                        </label>
                        <select className="w-full px-4 py-2 border rounded-md">
                            <option>Select</option>
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                    </div>

                    {/* Gender */}
                    <div className="md:col-span-2">
                        <label className="block font-medium mb-1">
                            Gender <span className="text-red-600">*</span>
                        </label>
                        <div className="flex items-center gap-6 mt-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="male" />
                                Male
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="female" />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className="md:col-span-2">
                        <label className="block font-medium mb-1">File Upload</label>
                        <input
                            type="file"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:bg-red-600 file:text-white hover:file:bg-red-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded"
                        >
                            Apply Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplyNow
