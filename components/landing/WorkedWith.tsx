import Image from "next/image"

export default function WorkedWith() {
  return (
    <div className="w-full h-64 flex flex-col items-center bg-primary-800 p-8">
      <h2 className="text-5xl text-white font-bold mb-2">WHO WE&apos;VE WORKED WITH</h2>
      <div className="flex flex-row items-center space-x-12">
        <Image src="/landing/asu-logo-dark--green.png" alt="ASU" width={150} height={150} />
        <Image src="/landing/2-NRL-logo.png" alt="ASU" width={150} height={150} />
        <Image src="/landing/tmobile.png" alt="ASU" width={250} height={250} />
        <Image src="/landing/3-ibm-logo.png" alt="ASU" width={150} height={150} />
      </div>
    </div>
  )
}
