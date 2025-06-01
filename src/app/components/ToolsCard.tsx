import Image from "next/image";

interface ToolsCardProps {
    icon: string;
    title: string;
    category: string;
    className: string;
    url?: string;
}

const ToolsCard: React.FC<ToolsCardProps> = ({
    icon,
    title,
    category,
    className,
    url,
}) => {
    return (
        <div
            className="max-[576px]:h-[120px] max-[576px]:text-[14px] p-[15px]
        translate-y-0 shadow-[0px_2px_10px_rgba(0,0,0,0.05)] bg-[rgba(253,253,253,0.726)]
        rounded-2xl p-5 flex flex-col gap-[11px] cursor-pointer transition-transform
        duration-300 ease-in-out hover:scale-102 hover:shadow-[0px_5px_15px_rgba(0,0,0,0.10)]"
        >
            <a href={url || "#"}>
                <Image
                    src={icon}
                    alt={title}
                    width={40}
                    height={40}
                    className="rounded-[10px]"
                />
            </a>
            <div className="flex-1">
                <a href={url}>
                    <h2 className="mb-[2px] font-semibold text-[#1a1a1a] md:mb-[5px]">
                        {title}
                    </h2>
                    <p className={className}>{category}</p>
                </a>
            </div>
        </div>
    );
};

export default ToolsCard;
