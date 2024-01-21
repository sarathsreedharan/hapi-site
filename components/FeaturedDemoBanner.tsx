import React from "react";

interface FeaturedDemoBannerProps {
    title: string;
    subtitle: string;
    videoUrl: string;
    imageUrl: string;
}

const FeaturedDemoBanner: React.FC<FeaturedDemoBannerProps> = ({ title, subtitle, videoUrl, imageUrl }) => {
    return (
        <div className="flex justify-between items-center bg-white p-4">
            <div className="flex-1 mr-4">
                <h1 className="text-2xl font-bold mb-2">{title}</h1>
                <p className="text-lg mb-4">{subtitle}</p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                        src={videoUrl} 
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="w-1/2">
                <img src={imageUrl} alt="Featured Image" />
            </div>
        </div>
    );
};

export default FeaturedDemoBanner;
