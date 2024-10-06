"use client"

import { useState } from "react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="max-w-md mx-auto p-8">
      <h3 className="text-xl text-primary-500 font-bold">INTERESTED IN THE LAB?</h3>
      <h2 className="text-4xl text-gold-500 font-black mb-6">JOIN THE HAPINESS</h2>
      <form
        action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_CONTACT}`}
        method="POST"
        onSubmit={() => setIsSubmitting(true)}
      >
        <input type="text" name="_honey" className="hidden"></input>
        <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_SITE_URL}/contact/success`}></input>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="mt-1 block w-full p-2 bg-primary-500 text-white placeholder-white"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="mt-1 block w-full p-2 bg-primary-500 text-white placeholder-white"
              required
            />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 block w-full p-2 bg-primary-500 text-white placeholder-white"
            required
          />
          <p className="text-white text-sm">
            Please contact us if you are a current CSU student. While there is no guarantee that we are currently accepting new
            lab members, curiosity and exploratory hellos are always welcome.
          </p>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="mt-1 block w-full p-2 bg-primary-500 text-white placeholder-white"
            rows={4}
            required
          ></textarea>
          <div className="flex mt-2">
            <button
              type="submit"
              className="ml-auto py-1.5 px-6 bg-gold-500 text-white text-sm font-semibold shadow rounded focus:outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
