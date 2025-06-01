import Link from "next/link";
import { BiSolidFileJpg, BiSolidFilePng } from "react-icons/bi";
import { FaDownload, FaFileImage, FaFilePdf } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { TbImageInPicture } from "react-icons/tb";

const Header = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-[1000]">
            <div className="max-w-[1200px] mx-auto px-[0.5rem] py-0 flex justify-between items-center h-[70px] mx-auto">
                <Link href="/" className="text-[24px] text-blue-500 font-bold no-underline flex items-center gap-2">
                    <FaFilePdf /> ConvertTools
                </Link>
                <button className="cursor-pointer bg-transparent border-none text-[32px] text-gray-500 md:hidden">
                    <GiHamburgerMenu />
                </button>
                <ul className="hidden md:flex items-center justify-between gap-6 list-none">
                    <li className="relative">
                        <a href="#" className="hover:bg-blue-400 text-text no-underline text-base px-4 py-2  rounded transition-all duration-300 ease-in-out">
                            Home
                        </a>
                    </li>
                    <li className="relative group">
                        <a className="no-underline flex items-center gap-1 hover:bg-blue-400 text-base px-4 py-2 rounded transition-all duration-300 ease-in-out" href="">
                            Img Tools <IoIosArrowDown className="text-xl" />
                        </a>
                        <div className="absolute top-full left-0 bg-white shadow-lg rounded min-w-[200px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                            <a href="" className="block py-2.5 px-4 border-b border-gray-200 hover:bg-gray-100 flex items-center gap-1"> <BiSolidFilePng className="text-2xl text-gray-700"/>Jpg to Png</a>
                            <a href="" className="block py-2.5 px-4 border-b border-gray-200 hover:bg-gray-100 flex items-center gap-1"> <BiSolidFileJpg className="text-2xl text-gray-700"/>Png to Jpg</a>
                            <a href="" className="block py-2.5 px-4 border-b border-gray-200 hover:bg-gray-100 flex items-center gap-1"><FaFilePdf className="text-2xl text-gray-700" />Image to PDF</a>
                            <a href="" className="block py-2.5 px-4 border-b border-gray-200 hover:bg-gray-100 flex items-center gap-1"><FaFileImage className="text-2xl text-gray-700"/>PDF to Image</a>
                            <a href="" className="block py-2.5 px-4 border-b border-gray-200 hover:bg-gray-100 flex items-center gap-1"><TbImageInPicture className="text-2xl text-gray-700" /> Image resize</a>
                            <a href="" className="block py-2.5 px-4 border-b border-gray-200 hover:bg-gray-100 flex items-center gap-1"><FaDownload className="text-2xl text-gray-700"/>Thumbnail</a>
                        </div>
                    </li>

                </ul>

            </div>
        </nav>
    );
}

export default Header;
