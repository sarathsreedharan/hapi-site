import Link from "next/link"

/* 

IMPORTANT!!!!
This file is used to set the content for the current projects carousel at the top of the projects page.
You can add as many projects as you want, but make sure to follow the format below.
Styling for these components is dont with tailwind classes (https://tailwindcss.com/docs/installation)

*/

export const projects = [
  {
    component: (
      <div className="w-full h-full flex justify-center items-center h-[35rem] bg-yellow-600">
        <div className="flex max-w-7xl">
          <div className="flex flex-col w-1/2">
            <h2 className="text-4xl text-gray-700 font-bold mb-2">FEATURED WORK:</h2>
            <h2 className="text-4xl text-white font-bold mb-2">The Native Bee Watch</h2>
            <div className="bg-white h-0.5 w-[60%] mb-4" />
            <p className="text-lg text-white mb-8">
              The Native Bee Watch project seeks to apply human-AI interaction, explanation generation, and mental modeling
              techniques to the development of an intelligent tutoring system for community science training. The project is
              funded by the National Science Foundation (NSF), and is helping to aid bee pollinator conservation efforts across
              Colorado.
            </p>
            <div>
              <Link href="/example" className="bg-gray-800 text-white rounded px-8 py-1.5 font-semibold">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <img src="projects/native-bee-watch/bee.png" alt="Bee" className="absolute bottom-0" />
          </div>
        </div>
      </div>
    ),
  },
  //   {
  //     component: (
  //       <div className="w-full h-full flex justify-center items-center h-[35rem] bg-yellow-600">
  //         {/* change the bg-color to another tailwind color (https://tailwindcss.com/docs/customizing-colors) or use bg-[#XXXXXX] to use a hex value */}
  //         <div className="flex max-w-7xl">{/* component content goes here */}</div>
  //       </div>
  //     ),
  //   },
]

const EXAMPLE = {
  component: (
    <div className="w-full h-full flex justify-center items-center h-[35rem] bg-yellow-600">
      {/* change the bg-color to another tailwind color (https://tailwindcss.com/docs/customizing-colors) or use bg-[#XXXXXX] to use a hex value */}
      <div className="flex max-w-7xl">{/* component content goes here */}</div>
    </div>
  ),
}
