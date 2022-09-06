interface TextInputProps {
    name: string;
    rows: number;
    id: string;
    label: string;
    autoComplete?: string;
}


export default function TextInput(props: TextInputProps) {
    return (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                {props.label}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                    id={props.id}
                    name={props.name}
                    rows={props.rows}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                />
            </div>
        </div>
    )
}
