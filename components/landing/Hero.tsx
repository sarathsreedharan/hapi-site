export default function Hero() {
  return (
    <>
      <div className="relative h-[80vh] w-full overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_auto] bg-primary-800">
        <div className="text-white text-left p-8 pl-16 flex items-center">
          <h1 className="text-7xl md:text-7xl font-bold mb-4">Human-Aware Planning & Interaction Lab</h1>
        </div>
        <div className="relative h-full w-[52rem] overflow-hidden hidden md:block">
          <img src="/landing/Ram-Background.jpg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
      </div>
      <div className="bg-gold-500 w-full h-4"></div>
    </>
  )
}
