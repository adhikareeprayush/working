import Nav from "@/components/Nav";
import heroImage from "@/app/assets/images/heroImage.png";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function Home() {
    return (
        <div className="relative">
            <div className="hero flex items-end justify-center h-screen w-full max-w-[1400px] relative mx-auto">
                <Nav />
                {heroImage && (
                    <img
                        src={heroImage.src}
                        alt="Hero Image showcasing the brand's theme"
                        className="z-10 w-full max-w-[800px] object-cover"
                    />
                )}
                <div className="flex flex-col gap-3 items-start max-w-[280px] absolute top-[50%] -translate-y-1/2 left-5 md:left-10 lg:left-20 text-secondary">
                    <FaQuoteLeft fontSize="24px" />
                    <p className="text-base">
                        Jenny’s exceptional product design ensures our website’s success. Highly recommended!
                    </p>
                </div>
                <div className="flex flex-col gap-3 max-w-[280px] absolute top-[50%] -translate-y-1/2 right-5 md:right-10 lg:right-20">
                    <div className="flex items-center justify-center gap-1 text-primary">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} fontSize="24px" />
                        ))}
                    </div>
                    <h2 className="text-3xl font-lugfa font-bold leading-5 text-secondary">10 Years</h2>
                    <p className="text-right text-base font-medium font-lugfa text-seconadry">Experience</p>
                </div>
            </div>
            {/* Circle */}
            <div className="w-[600px] h-[320px] bg-[#feb173] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-1 rounded-t-full"></div>
        </div>
    );
}
