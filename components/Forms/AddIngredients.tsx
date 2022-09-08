import { PlusIcon } from '@heroicons/react/outline';
import React, { SyntheticEvent, useRef, useState } from 'react'
import { Ingredient } from '../../types/Ingredient';
import { UnitValues } from '../../types/Units'

interface AddIngredientsProps {
    label: string;
    ingredients: Ingredient[];
    setIngredients: Function;
}



export default function AddIngredients(props: AddIngredientsProps) {


    const [ingName, setIngName] = useState<string>()
    const [ingUnit, setIngUnit] = useState<string>('')
    const [ingAmount, setIngAmount] = useState<number>()

    const amountInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const unitInputRef = useRef<HTMLSelectElement>(null);

    const onEnter = (e: SyntheticEvent) => {
        e.preventDefault();
        props.setIngredients([...props.ingredients, { name: nameInputRef.current?.value, amount: amountInputRef.current?.value, unit: unitInputRef.current?.value }]);
        amountInputRef.current ? amountInputRef.current.value = "" : null;
        nameInputRef.current ? nameInputRef.current.value = "" : null;
        unitInputRef.current ? unitInputRef.current.value = "" : null;
        amountInputRef.current?.focus();
    }


    return (
        <>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    {props.label}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className='grid grid-cols-5 max-w-lg gap-1'>
                        <input
                            ref={amountInputRef}
                            onChange={(e) => { setIngAmount(parseInt(e.target.value)) }}
                            type="text"
                            name="amount"
                            // id={"amount"}
                            className={"col-span-1 block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md placeholder:text-gray-400"}
                            placeholder="Amount"
                        />
                        <select
                            value={ingUnit}
                            onChange={(e) => { setIngUnit(e.target.value) }}
                            ref={unitInputRef}
                            name="unit"
                            // id={"amount"}
                            className={"col-span-1 block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md placeholder:text-gray-400"}
                        >
                            {UnitValues.map((unit) => {
                                return (
                                    <option value={unit}>{unit}</option>
                                )
                            })}
                        </select>
                        <div className="flex rounded-md shadow-sm col-span-3">
                            <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                <input
                                    ref={nameInputRef}
                                    type="text"
                                    name="ingredient"
                                    id="ingredient"
                                    className="block w-full rounded-none rounded-l-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Ingredient"
                                    onKeyDown={(e) => { e.key === 'Enter' ? onEnter(e) : null }}
                                    onChange={(e) => { setIngName(e.target.value) }}
                                />
                            </div>
                            <button
                                type="button"
                                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </button>
                        </div>


                        <div className="overflow-hidden mt-3
                         rounded-md bg-white shadow col-span-5 text-gray-700 text-sm m-0 p-0">
                            <ul role="list" className="divide-y divide-gray-200 m-0 p-0">
                                {props.ingredients.map((ing) => (
                                    <li key={ing.name + ing.unit} className="px-1 py-4">

                                        <div className='grid grid-cols-5 gap-1 max-w-lg'>
                                            <input
                                                className='col-span-1 px-3'
                                                value={ing.amount} />
                                            <select
                                                className='col-span-1 border-none text-sm  focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                                                style={{'WebkitAppearance': 'none'}}
                                                value={ing.unit}>
                                                {UnitValues.map((unit) => {
                                                    return (
                                                        <option value={unit}>{unit}</option>
                                                    )
                                                })}
                                            </select>
                                            <input
                                                className='col-span-3 px-3'
                                                value={ing.name} />

                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
