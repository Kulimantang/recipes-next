import React, { SyntheticEvent, useState } from 'react'

interface DragAndDropProps {
    name: string;
    id: string;
    label: string;
    onDrop: (e: SyntheticEvent) => void;
    onChange: (e: SyntheticEvent) => void;
}


export default function DragAndDrop(props: DragAndDropProps) {
    
    const [dragging, setDragging] = useState<boolean>(false);
    
    return (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                {props.label}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div
                    onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                    onDragLeave={(e) => { e.preventDefault(); setDragging(false) }}
                    onDrop={(e) => { e.preventDefault(); e.stopPropagation(); setDragging(false); props.onDrop(e) }}
                    className={"max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md" + (dragging ? ' border-indigo-500' : ' border-gray-300')}>
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor={props.id}
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input id={props.id} name={props.id} type="file" className="sr-only" accept="image/*" onChange={(e) => {props.onChange(e)}}
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
