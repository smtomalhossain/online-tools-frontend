"use client"
import HeroSection from "../../components/HeroSection";
import NotificationBar from "../../components/NotificationBar";
import SearchBar from "../../components/SearchBar";
import ColorCard from "../../components/ColorCard";
import { colorCardData, statusCardData, toolsCardData } from "@/lib/data";
import { useState } from "react";
import ToolsCard from "../../components/ToolsCard";
import StatusCard from "../../components/StatusCard";
import ImageToolsCard from "../../components/ImageToolsCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <div className="absolute w-full h-full pointer-events-none z-0">
        <div
          className="absolute opacity-50"
          style={{
            top: '10%',
            left: '10%',
            background: 'rgb(233, 30, 99)',
            width: '20px',
            height: '20px',
            borderRadius: '5px',
            animation: 'float 10s linear infinite',
            position: 'absolute', // assuming it's meant to float in place
          }}
        ></div>
        <div
          className="absolute opacity-50"
          style={{
            top: '30%',
            right: '20%',
            background: 'rgb(33, 150, 243)',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            animation: 'float 12s linear infinite',
            position: 'absolute', // needed for top/right to work
          }}
        ></div>
        <div
          className=""
          style={{
            bottom: '20%',
            left: '30%',
            background: 'rgb(255, 87, 34)',
            width: '25px',
            height: '25px',
            transform: 'rotate(450deg)',
            animation: 'float 14s linear infinite',
            position: 'absolute', // required for bottom/left to apply
          }}
        ></div>
        <div
          className="absolute opacity-50 absolute top-1/2 left-[10%] bg-pink-600 w-5 h-5 rounded-md animate-[float_16s_linear_infinite]"
          style={{
            transform: 'translate(6.8344px, 6.8344px) rotate(61.5096deg)',
          }}
        ></div>

        <div
          className="absolute opacity-50 absolute top-[60%] right-[20%] bg-blue-500 w-[30px] h-[30px] rounded-full animate-float"
          style={{
            transform: 'translate(6.8344px, 6.8344px) rotate(61.5096deg)',
          }}
        ></div>

        <div
          className="absolute opacity-50 absolute bottom-[70%] left-[30%] bg-orange-600 w-[25px] h-[25px] rotate-45 animate-float"
        ></div>






      </div>
      {/*Main Container */}
      <div className="px-3 max-w-[1200px] mx-auto md:px-5 pt-[4.5rem] relative z-[1]">
        <NotificationBar />
        {/* Hero Section */}
        <div className="text-left mb-10">
          <HeroSection />
        </div>
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full
        px-[10px] py-[3px] my-5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <SearchBar />
        </div>
        {/* Scroll Container */}
        <div className="relative gradient-overlay flex overflow-x-auto gap-5 py-5 snap-x snap-mandatory
         scroll-smooth [-webkit-overflow-scrolling-touch] [scrollbar-width:none]">
          {colorCardData.map((items, index) => (
            <ColorCard
              key={index}
              className={items.className}
              firstIcon={items.firstIcon}
              span={items.span}
              h2={items.h2}
              p={items.p}
              starIcon={items.starIcon}
              desc={items.desc}
            />
          ))}
        </div>
        {/* Heading Section */}
        <div className="text-center my-10">
          <h1 className="text-[36px] text-[#2196F3] mb-[1px] block text-[2em] font-bold bidi-isolate">Our Most Popular Tools</h1>
          <p className="text-[#666] text-[16px] block  mx-0 bidi-isolate text-center">We present the best of the best. All free, no catch</p>
        </div>
        {/* Category Tads */}
        <div className="relative  flex overflow-x-auto snap-x snap-mandatory
         scroll-smooth [-webkit-overflow-scrolling-touch] [scrollbar-width:none]  whitespace-nowrap scrollbar-none items-center flex  bg-white p-2.5 rounded-full mx-auto max-w-[500px] shadow-lg">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'all' ? 'bg-[#2196f3] text-white' : 'bg-transparent text-[#666]'
              }`}
          >
            All Tools
          </button>

          <button
            onClick={() => setActiveTab('pdf')}
            className={`px-3.5 py-1 rounded-full font-medium transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'pdf' ? 'bg-[#2196f3] text-white' : 'bg-transparent text-[#666]'
              }`}
          >
            PDF Tools
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`px-3.5 py-1 rounded-full font-medium transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'image' ? 'bg-[#2196f3] text-white' : 'bg-transparent text-[#666]'
              }`}
          >
            Image Tools
          </button>
          <button
            onClick={() => setActiveTab('doc')}
            className={`px-3.5 py-1 rounded-full font-medium transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'doc' ? 'bg-[#2196f3] text-white' : 'bg-transparent text-[#666]'
              }`}
          >
            Doc Tools
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3.5 py-1 rounded-full font-medium transition-all duration-300 ease-in-out cursor-pointer ${activeTab === 'ai' ? 'bg-[#2196f3] text-white' : 'bg-transparent text-[#666]'
              }`}
          >
            AI Tools
          </button>
        </div>
        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          {toolsCardData.map((item, index) => (
            <ToolsCard
              key={index}
              icon={item.icon}
              title={item.title}
              category={item.category.text}
              className={item.category.className}
            />
          ))}
        </div>
        {/* Status Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 mt-10">
          {statusCardData.map((items, index) => (
            <StatusCard
              key={index}
              title={items.title}
              label={items.label}
            />
          ))}
        </div>
        {/* Heading Section 2 */}
        <div className="text-center mt-10 relative">
          <h2
            className="text-[28px] lg:text-[36px] font-bold bg-gradient-to-r 
            from-[var(--gradient-start)] to-[var(--gradient-end)] text-blue-700
             mb-5 inline-block">
            Premium Tools, Zero Cost
          </h2>
          <p className="text-[18px] lg:text-[22px] text-gray-500 max-w-[600px] mx-auto block ">
            Experience enterprise-grade tools without the premium price tag. No <span className="inline-block bg-[#e91e63] text-white px-4 py-1.5 rounded-lg rotate-[-2deg]">sign-up</span> required.
          </p>
        </div>
        {/* Tools Card Section */}
        <div className="mt-10 grid gap-10 [grid-template-columns:repeat(auto-fit,_minmax(320px,_1fr))]">
          <ImageToolsCard/>
          <ImageToolsCard/>
          <ImageToolsCard/>
        </div>




      </div>


    </>

  );
}
