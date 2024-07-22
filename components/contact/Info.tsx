import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6"

export default function Info() {
  return (
    <div className="p-8 flex flex-col space-y-6 mt-8">
      <div className="mb-4">
        <h2 className="text-lg font-extrabold text-gold-500">SAY HI!</h2>
        <p className="text-sm text-white font-semibold">sarath.sreedharan@colostate.edu</p>
      </div>
      <div>
        <h2 className="text-lg font-extrabold text-gold-500">VISIT US</h2>
        <p className="text-sm text-white font-semibold">456 University Avenue, Fort Collins, CO 80521</p>
      </div>
      <div>
        <h2 className="text-lg font-extrabold text-gold-500 mt-2">SOCIAL</h2>
        <div className="flex items-center space-x-2 text-white my-1">
          <FaInstagram className="w-8 h-8 cursor-pointer hover:text-gray-300" />
          <FaXTwitter className="w-8 h-8 cursor-pointer hover:text-gray-300" />
          <FaYoutube className="w-8 h-8 cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </div>
  )
}
