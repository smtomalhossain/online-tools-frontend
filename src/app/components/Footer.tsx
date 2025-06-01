import { AiOutlineCompress } from "react-icons/ai";
import { FaCode, FaFilePdf, FaLock, FaObjectGroup, FaPenFancy, FaRegImage, FaRobot } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { RiBloggerFill, RiImageAiFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-8 px-0 relative">
            <div className="px-3 max-w-[1200px] mx-auto md:px-5 pt-[4.5rem] relative z-[1]">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[2.5fr_1.5fr_2.5fr_2fr]">
                    {/* Footer Section 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 mb-4">
                            <img className="w-[40px] h-auto" src="/footer-logo.svg" alt="" />
                            <span className="text-[1.5rem] font-semibold text-[#333]">ConvertTools</span>
                        </div>
                        <p className="text-[0.95rem] leading-[1.6] text-[#666] block">
                            Converttools provides free online conversion, pdf, and other handy tools to help you solve problems
                            of all types. All files both processed and unprocessed are deleted after 1 hour.
                        </p>

                    </div>
                    {/* Footer Section 2 */}
                    <div className="flex flex-col gap-6">
                        <h3 className="relative text-[1.2rem] font-semibold text-[#333] 
                        relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] 
                        after:w-[40px] after:h-[3px] after:bg-blue-500 after:rounded-[2px]">
                            Navigate
                        </h3>
                        <ul className="list-none flex flex-col gap-3 ">
                            <li>
                                <a className="flex items-center text-gray-600 gap-1 transform duration-300 ease-in-out hover:translate-y-[-3px] scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]" href="">
                                    <IoMdHome className="text-[22px] text-gray-600 " />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-gray-600 gap-1 transform duration-300 ease-in-out hover:translate-y-[-3px] scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]" href="">
                                    <FaLock className="text-[18px] text-gray-600 " />
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-gray-600 gap-1 transform duration-300 ease-in-out hover:translate-y-[-3px] scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]" href="">
                                    <IoDocumentText className="text-[18px] text-gray-600 " />
                                    TOS
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-gray-600 gap-1 transform duration-300 ease-in-out hover:translate-y-[-3px] scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]" href="">
                                    <FaRobot className="text-[18px] text-gray-600 " />
                                    Chat Bot
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-gray-600 gap-1 transform duration-300 ease-in-out hover:translate-y-[-3px] scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]" href="">
                                    <RiBloggerFill className="text-[18px] text-gray-600 " />
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Footer Section 3 */}
                    <div>
                        <h3 className="relative text-[1.2rem] font-semibold text-[#333] mb-6
                        relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] 
                        after:w-[40px] after:h-[3px] after:bg-blue-500 after:rounded-[2px]">
                            Popular Tools
                        </h3>
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-4">
                            <a className="p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <FaPenFancy className="text-gray-700 text-xl" />
                                Essay Writer
                                <span className="bg-blue-500 text-white px-2 py-[0.2rem] rounded-[12px] text-[0.7rem] ml-2">
                                    New
                                </span>
                            </a>
                            <a className="p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <FaCode className="text-gray-700 text-xl" />
                                Code Editor
                            </a>
                            <a className="p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <GiResize className="text-gray-700 text-xl" />
                                Image compressor
                            </a>
                            <a className="p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <RiImageAiFill className="text-gray-700 text-xl" />
                                Image generator
                            </a>


                        </div>

                    </div>
                    {/* Footer Section 4 */}
                    <div>
                        <h3 className="relative text-[1.2rem] font-semibold text-[#333] mb-6
                        relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] 
                        after:w-[40px] after:h-[3px] after:bg-blue-500 after:rounded-[2px]">
                            PDF Tools
                        </h3>
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-4">
                            <a className="flex p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <FaFilePdf className="text-gray-700 text-2xl" />
                                PDF  Split

                            </a>
                            <a className=" p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <AiOutlineCompress className="text-gray-700 text-2xl" />
                                Watermark Split

                            </a>
                            <a className=" p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <FaObjectGroup className="text-gray-700 text-2xl" />
                                Merge PDF

                            </a>
                            <a className=" p-[12px] bg-[#f8f9fa] rounded-lg no-underline text-[#666]
                            text-[0.9rem] transform translate-y-[-3px] duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:bg-white flex items-center
                             gap-2" href="">
                                <FaRegImage className="text-gray-700 text-2xl" />
                                PDF to Img

                            </a>


                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="mt-12 pt-8 border-t border-[#eee] text-center text-black text-[0.9rem]">
                Made By. <a className="text-blue-500 font-bold" href="">S.M. Tomal Hossain</a>
                <br />
                <p>© 2025 ConvertTools. All rights reserved.</p>
            </div>

        </div>

    );
}

export default Footer;
