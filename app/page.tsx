import Nav from "@/components/Nav";
import heroImage from "@/app/assets/images/heroImage.png";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import thred from "@/app/assets/Icons/threds.svg"
import Image from "next/image";

export default function Home() {
    return (
        <div className="relative">
            <div className="hero flex items-end justify-center h-screen w-full max-w-[1400px] relative mx-auto">
                <Nav />
                {heroImage && (
                    <>
                        <div
                            className="flex flex-col gap-2 tracking-[4px] absolute top-[33%] -translate-y-[33%] left-[50%] -translate-x-1/2 text-secondary -z-10 text-7xl font-semibold text-center">
                            <div className="flex items-center justify-center w-full">
                                <div className="flex w-[120px] flex-col gap-2 items-end justify-end text-center">
                                    <Image src={thred} alt='style' width={20}/>
                                    <div
                                        className='flex w-full h-[45px] justify-center items-center border-[2px] border-secondary rounded-full text-[18px] font-lugfa'>
                                        <p>Hello</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className='w-full text-center'>I'm <span className='text-primary'>Jenny </span></h1>
                            <h1 className=''>Product Designer</h1>
                            <Image src={thred} alt='style' width={40} className='rotate-180 -mt-5 -ml-7'/>
                        </div>
                        <img
                            src={heroImage.src}
                            alt="Hero Image showcasing the brand's theme"
                            className="z-10 w-full max-w-[700px] object-cover"
                        />
                        <div
                            className="flex items-center gap-5 justify-center absolute bottom-10 text-white left-[50%] -translate-x-1/2 z-20 border-2 w-fit rounded-full py-2 px-2 text-2xl">
                            <button className='bg-primary rounded-full px-5 py-2'>Portfolio</button>
                            <button className='px-5 py-2'>Hire Me</button>
                        </div>

                    </>
                )}


                <div
                    className="flex flex-col gap-3 items-start max-w-[280px] absolute top-[50%] -translate-y-1/2 left-0 md:left-0 lg:left-0 text-secondary">
                    <FaQuoteLeft fontSize="24px"/>
                    <p className="text-base font-lugfa font-medium">
                        Jenny’s exceptional product design ensures our website’s success. Highly recommended!
                    </p>
                </div>
                <div className="flex flex-col gap-3 max-w-[280px] absolute top-[50%] -translate-y-1/2 right-5 md:right-0 lg:right-0">
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
