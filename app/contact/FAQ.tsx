import { faqs } from "@/content/faqs"
import FAQCard from "./FAQCard"

export default function FAQ() {
  return (
    <div>
      <h2 className="text-4xl text-gold-500 font-black mb-6">LAB FAQ</h2>
      <div className="flex flex-col mt-8">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} index={index} length={faqs.length} />
        ))}
      </div>
    </div>
  )
}
