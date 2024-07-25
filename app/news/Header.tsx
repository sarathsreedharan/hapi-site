export default function Header() {
  return (
    <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url(/posts/newspaper-background.png)" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-3xl mx-auto flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold text-gold-500 mt-40">INSIDE THE HAPI LAB</h1>
        <p className="text-xl mt-4 mb-28">
          Discover the latest from the HAPI lab! Including news about conferences we&apos;re attending, things we&apos;re
          celebrating, events we&apos;re hosting, and more.
        </p>
      </div>
    </div>
  )
}
