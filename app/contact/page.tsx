import React from "react"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="container mx-auto px-4 h-screen py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
                <p className="text-lg mb-8">
                    If you are interested in joining our team, or have any questions, feel free to reach out to us.
                </p>

                {/* Email link */}
                <Link
                    href="mailto:joinourteam@example.com"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Email Us
                </Link>
            </div>
        </div>
    )
}

export default Contact
