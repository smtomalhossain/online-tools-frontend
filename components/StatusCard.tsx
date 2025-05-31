interface StatusCardProps {
    title: string
    label: string
}

const StatusCard: React.FC<StatusCardProps> = ({title, label}) => {
    return (
        <div className="bg-white p-5 text-center rounded-[15px] transition-transform duration-300 ease-in-out hover:translate-y-[-5px] shadow-[0_30px_50px_rgba(78,70,229,0.11)]">
            <h1 className="text-[2.5rem] font-bold text-[#2196F3]">
                {title}
            </h1>
            <p className="text-[#666] text-[0.9rem]">
                {label}
            </p>


        </div>
    );
}

export default StatusCard;
