import ContactForm from "@/components/contact/ContactForm"
import FAQ from "@/components/contact/FAQ"
import Info from "@/components/contact/Info"
import Navbar from "@/components/shared/Navbar"

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="bg-primary-800 py-16 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start p-6">
          <div className="w-full sm:w-1/2 p-4">
            <ContactForm />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <Info />
          </div>
        </div>
        <div className="max-w-5xl mx-auto p-6">
          <FAQ />
        </div>
      </div>
    </div>
  )
}
