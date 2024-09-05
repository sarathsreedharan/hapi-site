export default function Hero() {
  return (
    <>
      <div className="relative h-[80vh] w-full flex items-center bg-primary-800">
        <div className="flex-1 text-white text-left p-8 pl-16">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Human-Aware Planning & Interaction Lab</h1>
        </div>
        <div
          className="flex-none w-1/2 h-full bg-cover bg-right"
          style={{ backgroundImage: "url('/landing/Ram-Background.jpg')" }}
        ></div>
      </div>
      <div className="bg-gold-500 w-full h-4"></div>
    </>
  )
}
