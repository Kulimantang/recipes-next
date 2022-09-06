import React from 'react'
import { Recipe } from '../../types/Recipe'

// interface RecipeListItemProps {
//     name: string;
//     imageUrl?: string;
//     imageAlt?: string;
//     minutes?: number;
//     author?: string;
// }

const RecipeListItem = (props: Recipe) => {
    return (
        <>
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 max-w-sm sm:max-w-lg">
                <div className='h-24 sm:h-40 overflow-hidden flex place-content-center'>
                    <img className='w-full object-cover' src={props.imageUrl} alt='' />
                </div>
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{props.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
                    </p>
                </div>
            </div>
        </>
    )
}

export default RecipeListItem