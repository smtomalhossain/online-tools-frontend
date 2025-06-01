import { FaFileExcel, FaFileImage, FaFilePdf, FaFileWord, FaStar } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

export const colorCardData = [
  {
    id: 1,
    className: "bg-[linear-gradient(135deg,_#39a6ff,_#2196F3)]",
    firstIcon: <FaFileExcel className="text-[24px] text-white font-black" />,
    span: "5+ tools",
    h2: "Excel Tools",
    p: "Solve Your Excel Problems",
    starIcon: <FaStar className="text-[18px] text-white font-black" />,
    desc: "Featured Tool: Split Excel"
  },
  {
    id: 2,
    className: "bg-[linear-gradient(135deg,_#ff7be2,_#d362a4)]",
    firstIcon: <FaFilePdf className="text-[24px] text-white font-black" />,
    span: "15+ tools",
    h2: "PDF Tools",
    p: "Solve Your PDF Problems",
    starIcon: <FaStar className="text-[18px] text-white font-black" />,
    desc: "Featured Tool: PDF Creator"
  },
  {
    id: 3,
    className: "bg-gradient-to-br from-[#FF5C35] to-[#FF8B68] ...",
    firstIcon: <FaFileImage className="text-[24px] text-white font-black" />,
    span: "10+ tools",
    h2: "Image Tools",
    p: "Solve Your Image Problems",
    starIcon: <FaStar className="text-[18px] text-white font-black" />,
    desc: "Featured Tool: Remove BG"
  },
  {
    id: 4,
    className: "bg-gradient-to-br from-[#026B5B] to-[#039D7E] ...",
    firstIcon: <IoDocumentText className="text-[24px] text-white font-black" />,
    span: "5+ tools",
    h2: "Doc Tools",
    p: "Solve Your Excel Problem",
    starIcon: <FaStar className="text-[18px] text-white font-black" />,
    desc: "Featured Tool: Doc Creator"
  },
  {
    id: 5,
    className: "bg-gradient-to-br from-[#6B4EFF] to-[#9683FF] ...",
    firstIcon: <FaFileWord className="text-[24px] text-white font-black" />,
    span: "5+ tools",
    h2: "Word Tools",
    p: "Solve Your Word Problem",
    starIcon: <FaStar className="text-[18px] text-white font-black" />,
    desc: "Featured Tool: Word Creator"
  },
];

export const toolsCardData = [
 {
    id: 1,
    icon: "/tools-image/image-pdf.png",
    title: "Image to PDF",
    category: {
      className: "text-green-500 text-sm",
      text: "Image Tools",
    },
    url: "/image-to-pdf",
  },
  {
    id: 2,
    icon: "/tools-image/merge-pdf.png",
    title: "Merge PDF",
    category: {
      className: "text-red-400 text-sm",
      text: "PDF Tools",
    },
    url: "/merge-pdf",
  },
  {
    id: 3,
    icon: "/tools-image/pdf-text.png",
    title: "PDF to Text",
    category: {
      className: "text-red-400 text-sm",
      text: "PDF Tools",
    },
    url: "/pdf-to-text",
  },

  {
    id: 5,
    icon: "/tools-image/pdf-doc.png",
    title: "PDF to Doc",
    category: {
      className: "text-red-400 text-sm",
      text: "PDF Tools",
    },
    url: "/pdf-to-doc",
  },
  {
    id: 6,
    icon: "/tools-image/pdf-zip.png",
    title: "PDF to Zip",
    category: {
      className: "text-red-400 text-sm",
      text: "PDF Tools",
    },
    url: "/pdf-to-zip",
  },
  {
    id: 7,
    icon: "/tools-image/pdf-image.png",
    title: "PDF to Image",
    category: {
      className: "text-red-400 text-sm",
      text: "PDF Tools",
    },
    url: "/pdf-to-image",
  },
  {
    id: 8,
    icon: "/tools-image/documents.png",
    title: "Doc to Text",
    url: "/doc-to-text",
    category: {
      className: "text-[#00bcd4] text-sm",
      text: "Doc Tools",
    },
  },
  {
    id: 9,
    icon: "/tools-image/doc-text.png",
    title: "Text to Doc",
    category: {
      className: "text-[#00bcd4] text-sm",
      text: "Doc Tools",
    },
    url: "/text-to-doc",
  },
  {
    id: 10,
    icon: "/tools-image/doc-text.png",
    title: "Code Editor",
    category: {
      className: "text-[#00bcd4] text-sm",
      text: "Doc Tools",
    },
    url: "/code-editor",
  },
  {
    id: 11,
    icon: "/tools-image/image-resize.png",
    title: "Image Resize",
    category: {
      className: "text-green-500 text-sm",
      text: "Image Tools",
    },
    url: "/image-resize",
  },
  {
    id: 12,
    icon: "/tools-image/image-comp.png",
    title: "Image Compressor",
    category: {
      className: "text-green-500 text-sm",
      text: "Image Tools",
    },
    url: "/image-compressor",
  },
  {
    id: 13,
    icon: "/tools-image/png-jpg.png",
    title: "Png to Jpg",
    category: {
      className: "text-green-500 text-sm",
      text: "Image Tools",
    },
    url: "/png-to-jpg",
  },
  {
    id: 14,
    icon: "/tools-image/ai-image-generator.png",
    title: "Image Generator",
    category: {
      className: "text-blue-400 text-sm",
      text: "AI Tools",
    },
    url: "/ai-image-generator",
  },
  {
    id: 15,
    icon: "/tools-image/ai-articl-writer.png",
    title: "Content Writer",
    category: {
      className: "text-blue-400 text-sm",
      text: "AI Tools",
    },
    url: "/content-writer",
  },
  {
    id: 16,
    icon: "/tools-image/ai-content-writer.png",
    title: "Content rewriter",
    category: {
      className: "text-blue-400 text-sm",
      text: "AI Tools",
    },
    url: "/content-rewriter",
  },
  {
    id: 17,
    icon: "/tools-image/content-improver.png",
    title: "Content Improver",
    category: {
      className: "text-blue-400 text-sm",
      text: "AI Tools",
    },
    url: "/content-improver",
  },
];

export const statusCardData = [
  {
    id: 1,
    title: "10m",
    label: "Files Converted"
  },
  {
    id: 2,
    title: "200+",
    label: "Online Tools"
  },
  {
    id: 3,
    title: "1m",
    label: "Active User"
  },
  {
    id: 4,
    title: "500k",
    label: "PDFs Created"
  },
];

export const imageCardData = [
  {
    id: 1,
    image: "/1.png",
    title: "Image Resize",
    description: "Easily resize your images to the perfect dimensions for web, print, or social media without losing quality.",
  },
  {
    id: 2,
    image: "/2.png",
    title: "Edit PDF Text",
    description: "Make quick edits to your PDF documents — change text, fix typos, or update content directly in your browser.",
  },
  {
    id: 3,
    image: "/3.png",
    title: "Code Editor",
    description: "Write, edit, and preview your code in real-time with our fast, browser-based code editor tailored for developers.",
  }
]
