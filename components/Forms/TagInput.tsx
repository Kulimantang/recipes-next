import React, { createRef, SyntheticEvent, useRef, useState } from 'react'

interface TagInputProps {
    name: string;
    id: string;
    label: string;
    onEnter: (text: string) => void;
}

export default function TagInput(props: TagInputProps) {
    
    const [text, setText] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onEnter = (e: SyntheticEvent) => {
        e.preventDefault();
        props.onEnter(text);
        inputRef.current ?  inputRef.current.value = "" : null;
    }
    
    
    return (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                {props.label}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    type="text"
                    name={props.name}
                    id={props.id}
                    ref={inputRef}
                    className={"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md sm:max-w-xs"}
                    onKeyDown={(e) => {e.key === 'Enter' ? onEnter(e) : null}}
                    onChange={(e) => {setText(e.target.value)}}
                />
            </div>
        </div>
    )
}
