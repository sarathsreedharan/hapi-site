export default function Header() {
  return (
    <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url(/posts/news-hero-background.png)" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-6 md:p-0 max-w-3xl mx-auto flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold text-white mt-40">INSIDE THE HAPI LAB</h1>
        <p className="text-xl mt-4 mb-28">
          Discover the latest from the HAPI lab! Including news about conferences we&apos;re attending, things we&apos;re
          celebrating, events we&apos;re hosting, and more.
        </p>
      </div>
    </div>
  )
}
