import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('Submitting...');

        try {
            const response = await fetch('http://localhost:5000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.status === 200) {
                setStatus('Message sent successfully!');
            } else {
                setStatus(data.error || 'Failed to send message.');
            }

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#194266] to-[#235C85] text-white flex flex-col items-center py-16 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-center text-gray-400 max-w-2xl mb-10">
                We're just one step away from connecting with you! Whether you have questions about our services, want to discuss a potential collaboration, or need personalized technology solutions, our team is here to assist you. Reach out via phone, email, or this form to start a conversation that leads to transformative outcomes for your business.
            </p>

            <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@mail.com"
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                    />
                </div>

                {/* Subject Input */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="I want to..."
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                    />
                </div>

                {/* Message Input */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hello..."
                        rows="4"
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-300"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            <div className="mt-4">
                {status && <p className="text-gray-400">{status}</p>}
            </div>
        </div>
    );
}

export default ContactUs;
