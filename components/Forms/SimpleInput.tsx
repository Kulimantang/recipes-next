type InputSize = 'sm' | 'md' | 'lg'

interface SimpleInputProps {
    name: string;
    size: InputSize;
    id: string;
    label: string;
    autoComplete?: string;
}

export default function SimpleInput(props: SimpleInputProps) {
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
                    autoComplete={props?.autoComplete}
                    className={"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" 
                    + (props.size === 'sm' ? " sm:w-44" : 
                    props.size === 'md' ? " sm:max-w-xs" : '')
                    }
                />
            </div>
        </div>
    )
}
