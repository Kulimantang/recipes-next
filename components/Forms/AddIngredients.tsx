import React from 'react'

interface AddIngredientsProps {
    label: string;

}

export default function AddIngredients(props: AddIngredientsProps) {
    return (

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                {props.label}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    type="text"
                    name="amount"
                    // id={"amount"}
                    className={"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"

                    }
                />
            </div>
        </div>

    )
}
