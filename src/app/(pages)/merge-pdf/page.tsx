"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaFileUpload, FaRegArrowAltCircleRight } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable, DropResult, } from "@hello-pangea/dnd";


interface UploadedFile {
    id: number;
    name: string;
    file: File;
    preview: string;
    progress: number;
    status: "uploading" | "completed" | "error";
    timeRemaining?: string;
}



const ImageToPDF = () => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [fileIdCounter, setFileIdCounter] = useState(1);

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reordered = Array.from(files);
        const [moved] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, moved);

        setFiles(reordered);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file, index) => ({
                id: fileIdCounter + index,
                name: file.name,
                file: file,
                preview: URL.createObjectURL(file),
                progress: 0,
                status: "uploading",
                timeRemaining: "Uploading...",
            }));
            setFileIdCounter((prev) => prev + newFiles.length);
            setFiles((prev) => [...prev, ...newFiles]);
            simulateUpload(newFiles);
        }
    };

    const simulateUpload = (uploadFiles: UploadedFile[]) => {
        uploadFiles.forEach((file) => {
            let currentProgress = 0;
            const interval = setInterval(() => {
                currentProgress += 10;
                setFiles((prevFiles) =>
                    prevFiles.map((f) =>
                        f.id === file.id
                            ? {
                                ...f,
                                progress: currentProgress >= 100 ? 100 : currentProgress,
                                status: currentProgress >= 100 ? "completed" : "uploading",
                                timeRemaining:
                                    currentProgress >= 100 ? "Upload complete" : `${3 - Math.floor(currentProgress / 33)}s remaining`,
                            }
                            : f
                    )
                );
                if (currentProgress >= 100) clearInterval(interval);
            }, 500);
        });
    };

    const removeFile = (id: number) => {
        setFiles((prev) => prev.filter((file) => file.id !== id));
    };

    useEffect(() => {
        return () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        };
    }, [files]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-white overflow-auto py-10 px-4">

            <div className="grid w-[86%] md:w-[70%] lg:w-[55%] gap-5">
                <div className="pt-10 px-6 ">
                    <h1 className=" font-extrabold text-[25px] md:text-[37px] lg:text-[42px] leading-[52px] text-[#33333b] text-center">Merge PDF Files</h1>
                    <h2 className="max-w-[800px]  mx-auto leading-[32px] text-[16px] lg:text-[22px] font-normal text-[#47474f] text-center">Merge you PDF Files free
                    </h2>
                </div>
                <div className="w-full rounded-2xl border border-solid border-gray-300 bg-gray-50 py-18 mt-5">
                    <div className="grid gap-3">
                        <div>
                            <FaFileUpload className="mx-auto mb-1 text-4xl" fill="#4F46E5" />
                            <h2 className="text-center text-xs font-light text-gray-400">PNG, JPG or PDF, smaller than 15MB</h2>
                        </div>
                        <div className="grid gap-2">
                            <h4 className="text-center text-sm font-medium text-gray-900">Drag and Drop your file here or</h4>
                            <div className="flex items-center justify-center">
                                <label>
                                    <input type="file" hidden multiple onChange={handleFileChange} />
                                    <div className="flex h-9 w-28 cursor-pointer flex-col items-center justify-center rounded-full bg-indigo-600 px-2 text-xs font-semibold text-white shadow">
                                        Choose File
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="fileList">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {files.map((file, index) => (
                                    <Draggable key={file.id.toString()} draggableId={file.id.toString()} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="grid w-full gap-1 mb-5 rounded-md bg-[#F5F7FB] py-4 px-8"
                                            >
                                                {/* file card content */}
                                                <div className="flex items-center justify-between gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <Image
                                                            width={80}
                                                            height={60}
                                                            src={file.preview}
                                                            alt={file.name}
                                                            className="object-cover rounded"
                                                        />
                                                        <div className="grid gap-1">
                                                            <h4 className="text-sm font-normal text-gray-900">{file.name}</h4>
                                                            <h5 className={`text-xs font-normal ${file.status === "completed" ? "text-green-500" : "text-red-400"}`}>
                                                                {file.status === "completed" ? "Upload complete" : file.timeRemaining}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <CiCircleRemove
                                                        onClick={() => removeFile(file.id)}
                                                        className="font-bold text-4xl cursor-pointer"
                                                    />
                                                </div>
                                                {file.progress < 100 && (
                                                    <div className="relative flex items-center gap-2.5 py-1.5">
                                                        <div className="relative h-2.5 w-full overflow-hidden rounded-3xl bg-white">
                                                            <div
                                                                role="progressbar"
                                                                aria-valuenow={file.progress}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{ width: `${file.progress}%` }}
                                                                className="flex h-full items-center justify-center rounded-3xl bg-indigo-600 text-white transition-all duration-300"
                                                            ></div>
                                                        </div>
                                                        <span className="ml-2 text-xs font-medium text-gray-800">{file.progress}%</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                <div className="p-5">
                    <button className="mx-auto bg-blue-500 text-white flex items-center gap-3 min-h-[56px] text-2xl leading-7 rounded-xl font-medium px-6 py-4 hover:bg-blue-600 cursor-pointer">
                        <span className="font-bold height: 24px;">Merge PDF</span>
                        <span><FaRegArrowAltCircleRight className="text-3xl font-bold " />
                        </span>
                    </button>
                </div>

            </div>

        </div>

    );
};

export default ImageToPDF;
