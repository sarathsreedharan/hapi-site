"use client"

import { useState } from "react"
import { FaChevronUp } from "react-icons/fa"

export default function FAQCard({
  question,
  answer,
  index,
  length,
}: {
  question: string
  answer: string
  index: number
  length: number
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  return (
    <div
      className={`p-4 flex flex-col space-y-4 border cursor-pointer ${
        isAnswerVisible ? "border-gold-500 bg-primary-500" : "border-primary-500"
      } ${index === 0 ? "rounded-t-lg" : ""} ${index === length - 1 ? "rounded-b-lg" : ""}`}
      onClick={() => setIsAnswerVisible(!isAnswerVisible)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gold-500">{question.toUpperCase()}</h3>
        <FaChevronUp className={`w-6 h-6 text-gold-500 transition-transform transform ${isAnswerVisible && "rotate-180"}`} />
      </div>
      {isAnswerVisible && (
        <>
          <hr className="border-t-2 border-gold-500 my-2" />
          <p className="text-white mt-2">{answer}</p>
        </>
      )}
    </div>
  )
}
