import React from 'react'

function Contactus() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-[#194266] to-[#235C85] text-white flex flex-col items-center py-16 px-6">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-center text-gray-400 max-w-2xl mb-10">
                    We're just one step away from connecting with you! Whether you have questions about our services, want to discuss a potential collaboration, or need personalized technology solutions, our team is here to assist you. Reach out via phone, email, or this form to start a conversation that leads to transformative outcomes for your business.
                </p>

                {/* Form */}
                <form className="w-full max-w-lg space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="yourname@mail.com"
                            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                        />
                    </div>

                    {/* Subject Input */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                        </label>
                        <input
                            id="subject"
                            type="text"
                            placeholder="I want to..."
                            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                        />
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Hello..."
                            rows="4"
                            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-10 text-center">
                    <p className="text-gray-400 mb-4">Contact us through</p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactus