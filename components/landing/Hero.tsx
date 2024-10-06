export default function Hero() {
  return (
    <div className="bg-primary-800 pt-16">
      <div className="relative md:h-[70vh] w-full overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_auto]">
        <div className="text-white text-left p-8 md:pl-16 flex items-center">
          <h1 className="text-5xl md:text-7xl font-bold mt-20 mb-20 md:mt-0 md:mb-4">Human-Aware Planning & Interaction Lab</h1>
        </div>
        <div className="relative h-full w-[50rem] overflow-hidden hidden md:block">
          <img src="/landing/Ram-Background.jpg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
      </div>
      <div className="bg-gold-500 w-full h-4"></div>
    </div>
  )
}
