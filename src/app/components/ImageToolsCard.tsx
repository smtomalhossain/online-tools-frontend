import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

interface ImageToolsCardProps {
    image: string
    title: string
    description: string

}

const ImageToolsCard: React.FC<ImageToolsCardProps> = ({ image, title, description }) => {
    return (
        <div className="bg-white/90 mb-5 backdrop-blur-md rounded-[24px] p-[30px] transition-all
         duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <div className="w-full h-[180px] rounded-[16px] overflow-hidden mb-[25px] relative">
                <Image height={500} width={600} className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" src={image} alt="" />
            </div>
            <h3 className="text-[28px] font-bold mb-[15px] bg-[linear-gradient(90deg,_#4F46E5,_#9333EA)] 
            bg-clip-text text-transparent">
                {title}
            </h3>
            <p className="text-[17px] text-gray-500 leading-[1.6] mb-[25px]">
               {description}
            </p>
            <a className="group inline-flex items-center gap-2 cursor-pointer px-6 py-3 
            bg-[linear-gradient(90deg,_#4F46E5,_#9333EA)] text-white no-underline rounded-[12px]
             font-medium transition-all duration-300 ease-in-out relative overflow-hidden 
            after:content-[''] after:absolute after:top-[-50%] after:left-[-50%] after:w-[200%] after:h-[200%] 
            after:bg-[linear-gradient(rgba(255,255,255,0.2),transparent)] after:rotate-45 after:transition-all after:duration-500 
            hover:after:left-[100%]">
                Explore Now
                <MdArrowForwardIos />
            </a>





        </div>

    );
}

export default ImageToolsCard;
