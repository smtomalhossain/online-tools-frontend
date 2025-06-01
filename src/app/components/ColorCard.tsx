import { JSX } from "react";

interface ColorCardProps {
    className: string;
    firstIcon: JSX.Element;
    span: string;
    h2: string;
    p: string;
    starIcon: JSX.Element;
    desc: string;

}

const ColorCard: React.FC<ColorCardProps> = ({ className, firstIcon, span, h2, p, starIcon, desc }) => {
    return (
        <div className={`min-w-[300px] h-[200px] p-5 rounded-2xl snap-start relative text-white flex flex-col justify-between overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-[-5px] ${className}`}>
            <div className="relative z-2">
                <div className="">
                    <div className="w-[50px] h-[50px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[5px] rounded-xl flex items-center justify-center mb-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                        {firstIcon}
                    </div>
                    <span className="absolute top-[25px] right-[25px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[5px] px-[15px] py-[6px] rounded-[20px] text-[14px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                        {span}
                    </span>
                    <h2 className="text-[26px] font-bold  tracking-[-0.5px]">
                        <a href="">{h2}</a>
                    </h2>
                    <p className="text-[16px] opacity-90 font-normal">
                        <a href="">{p}</a>
                    </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-[5px] px-[20px] py-[10px] rounded-[12px] mt-[18px] inline-flex items-center gap-2 font-medium shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                    {starIcon}
                    {desc}
                </div>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] w-[100px] h-[100px] bg-[rgba(255,255,255,0.1)] rounded-full z-10">
            </div>

        </div>
    );
}

export default ColorCard;
