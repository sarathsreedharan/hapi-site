import FAQ from "../FAQ"
import Info from "../Info"

export default function ContactSuccess() {
  return (
    <div className="bg-primary-800 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start p-6">
        <div className="w-full sm:w-1/2 p-4">
          <div className="max-w-md mx-auto p-8">
            <h1 className="text-4xl text-gold-500 font-bold mb-2">THANK YOU FOR REACHING OUT!</h1>
            <p className="text-white text-lg">We will get back to you as soon as possible.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <Info />
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-6">
        <FAQ />
      </div>
    </div>
  )
}
