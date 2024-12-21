import Nav from "@/components/Nav";
import heroImage from "@/app/assets/images/heroImage.png";
import { FaQuoteLeft } from "react-icons/fa6";


export default function Home() {
    return (
        <div className="">
            <div className="hero flex items-end justify-center h-screen w-full max-w-[1400px] relative mx-auto">
                <Nav />
                {heroImage && <img src={heroImage.src} alt="Hero Image" width={800} />}
                <div className="flex flex-col gap-3 items-start max-w-[280px] absolute top-[50%] -translate-y-1/2 left-0">
                    <FaQuoteLeft fontSize='large' />
                    <p>Jenny’s Exceptional product design ensure our website’s success. Highly Recommended</p>
                </div>
            </div>
        </div>
    );
}

