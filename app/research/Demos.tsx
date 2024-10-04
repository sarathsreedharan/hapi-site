"use client"

import { demoVideos } from "@/content/demo-videos"
import ReactPlayer from "react-player"
import { useEffect, useState } from "react"

export default function Demos() {
  const [isClient, setIsClient] = useState(false)
  // for some reason the videos cause hydration issues on the server even thought the component is client side

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }
  return (
    <div className="max-w-7xl mx-auto p-4 my-24">
      <h2 className="text-4xl font-bold text-primary-800 mb-4">LAB DEMOS</h2>
      <div className="flex flex-wrap mb-8">
        <div className="w-full md:w-1/2 flex justify-center items-center md:p-8">
          <ReactPlayer url={demoVideos[0].url} width="100%" height="325px" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">{demoVideos[0].title}</h2>
          <p className="text-gray-800 mb-6">{demoVideos[0].description}</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        {demoVideos.slice(1, 4).map((video, index) => (
          <div key={index} className="w-full md:w-1/3 p-2">
            <ReactPlayer url={video.url} width="100%" height="250px" />
          </div>
        ))}
      </div>
    </div>
  )
}
