"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carousel.css"

type Project = {
  component: React.ReactNode
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  if (projects.length === 1) {
    return <div className="w-full flex items-center justify-center relative">{projects[0].component}</div>
  } else {
    return (
      <div className="overflow-hidden w-full">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="w-full flex items-center justify-center">
              {project.component}
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
