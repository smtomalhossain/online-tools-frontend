const SearchBar = () => {
    return (
        <>
            <input
                type="text"
                placeholder="Search tools..."
                className="flex-1 border-none outline-none text-base p-[10px]"
            />
            <button className="bg-[#2196f3] text-white border-none px-[14px] lg:px-[26px] py-[6px] rounded-[25px] cursor-pointer font-medium">
                Search
            </button>

        </>
    );
}

export default SearchBar;
