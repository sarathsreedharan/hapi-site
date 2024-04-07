import React from "react"

const imageUrls = ["/pages/home/1-asu-logo-green.png", "/pages/home/2-NRL-logo.png", "/pages/home/3-ibm-logo.png"]

const WorkedWith: React.FC = () => {
    return (
        <section className="text-center py-8 bg-[#004d39]">
            <h2 className="text-4xl font-extrabold mb-8 text-white">WHO WE'VE WORKED WITH</h2>
            <div className="flex justify-center items-center gap-14">
                {imageUrls.map((url: string, index: number) => (
                    <img key={index} src={url} alt={`Image ${index + 1}`} className="w-32 h-auto" />
                ))}
            </div>
        </section>
    )
}

export default WorkedWith
