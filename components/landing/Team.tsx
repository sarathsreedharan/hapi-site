import Image from "next/image"
import Link from "next/link"

export default function Team() {
  return (
    <section className="p-16 bg-gold-500 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        <div className="flex-1 flex-col text-left space-y-6 p-4 w-1/2">
          <h2 className="text-5xl font-extrabold text-primary-800">THE HAPI TEAM</h2>
          <div className="space-y-4">
            <p>
              The HAPI Lab is led by Dr. Sarath Sreedharan and consists of Ph.D., Masters and Undergraduate students doing
              research at all levels. If you are a student interested in joining the lab, please{" "}
              <Link href="/contact" className="underline">
                read our FAQ
              </Link>{" "}
              and consider contacting us here.
            </p>
          </div>
          <div>
            <Link
              href="/team"
              className="px-4 py-2 bg-primary-800 hover:bg-primary-500 transition duration-200 text-white font-extrabold rounded"
            >
              MEET THE TEAM
            </Link>
          </div>
        </div>

        <div className="flex-1 w-1/2 flex items-center justify-center">
          <Image src="/landing/CMP-SCI-Building.jpg" alt="HAPI LAB TEAM" width={600} height={400} className="rounded" />
        </div>
      </div>
    </section>
  )
}
