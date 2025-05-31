const NotificationBar = () => {
    return (
        <div className="bg-[#2196F3] text-white  p-2 text-center mb-[30px] rounded-lg flex items-center justify-center gap-[10px]">
            Want ToolHub Updates? <span className="hidden md:block">No Spam.</span>
            <button className="bg-white text-[#2196F3] py-2 px-5 rounded-full border-0 cursor-pointer font-medium duration-300 ease-in-out animate-bounce hover:animate-none">Subscribe</button>
        </div>
    );
}

export default NotificationBar;
