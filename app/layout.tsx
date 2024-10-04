import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The HAPI Lab | CSU",
  description: "The Human-Aware Planning and Interaction lab at Colorado State University.",
  openGraph: {
    url: "https://hapi-lab.org/",
    title: "The HAPI Lab | CSU",
    description: "The Human-Aware Planning and Interaction lab at Colorado State University.",
    siteName: "HAPI Lab",
    images: [
      {
        url: "https://hapi-lab.org/ogimage.png",
        width: 1200,
        height: 628,
        alt: "HAPI Lab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The HAPI Lab | CSU",
    description: "The Human-Aware Planning and Interaction lab at Colorado State University.",
    images: { url: "https://hapi-lab.org/ogimage.png", alt: "HAPI Lab" },
  },
  category: "education",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
