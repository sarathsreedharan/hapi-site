import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "HAPI Lab CSU",
    description: "Human-Aware Planning and Interaction Lab at Colorado State University",
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>HAPI Lab CSU</title>
                <meta name="title" content="HAPI Lab CSU" />
                <meta name="description" content="Human-Aware Planning and Interaction Lab at Colorado State University" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="HAPI Lab CSU" />
                <meta property="og:description" content="Human-Aware Planning and Interaction Lab at Colorado State University" />
                <meta property="og:image" content="https://hapi-site.vercel.app/metadata-thumbnail.png" />
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="HAPI Lab CSU" />
                <meta
                    property="twitter:description"
                    content="Human-Aware Planning and Interaction Lab at Colorado State University"
                />
                <meta property="twitter:image" content="https://hapi-site.vercel.app/metadata-thumbnail.png" />
                LIVE
                {/* <!-- Meta Tags Generated with https://metatags.io --> */}
            </Head>
            <body
                className={`antialiased min-h-screen bg-[#ffffff] dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
            >
                <div>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    )
}
