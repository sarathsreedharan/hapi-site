import React from "react"

const MeetLab: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-8 bg-[#c39b3c]">
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-center md:text-left">THE LAB</h2>
                <p className="mt-4 text-left">
                    The HAPI Lab is led by Dr. Sarath Sreedharan and consists of Ph.d.. Masters and Undergraduate students doing
                    research at all levels... as well as Shaky Jr., our resident robot. If you are a student interested in joining
                    the lab, please read our raw and consider contacting us here.
                </p>
                <div className="flex justify-center md:justify-start mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        MEET THE TEAM
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <img
                    src="/pages/home/team-photo.jpg"
                    alt="HAPI LAB TEAM"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                    style={{ margin: "0 auto", maxWidth: "90%", height: "auto" }}
                />
            </div>
        </section>
    )
}

export default MeetLab
