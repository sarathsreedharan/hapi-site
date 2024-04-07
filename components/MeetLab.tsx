import React from "react"

const MeetLab: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-8 bg-[#c39b3c]">
            <div className="flex-1 flex-col items-center justify-center space-y-4 p-4">
                <h2 className="text-6xl text-center font-extrabold text-[#004a36]">The Lab</h2>
                <p className="text-left">
                    The HAPI Lab is led by Dr. Sarath Sreedharan and consists of Ph.D., Masters and Undergraduate students doing
                    research at all levels...as well as Shaky Jr., our resident robot. If you are a student interested in joining
                    the lab, please read our FAQ and consider contacting us here.
                </p>
                <button className="px-4 py-2 bg-[#9d9168] text-white font-extrabold rounded hover:[#bca867] transition-colors">
                    MEET THE TEAM
                </button>
            </div>
            <div className="flex-1">
                <img src="/pages/home/team-photo.jpg" alt="HAPI LAB TEAM" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
        </section>
    )
}

export default MeetLab
