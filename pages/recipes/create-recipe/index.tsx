import SimpleInput from "../../../components/Forms/SimpleInput";
import TextInput from "../../../components/Forms/TextInput";
import SimpleCard from "../../../components/General/SimpleCard";
import DragAndDrop from "../../../components/Forms/DragAndDrop";
import TagInput from "../../../components/Forms/TagInput";
import { useEffect, useState } from "react";
import RemovableTag from "../../../components/Forms/RemovableTag";
import AddIngredients from "../../../components/Forms/AddIngredients";
import { Ingredient } from "../../../types/Ingredient";

export default function CreateRecipe() {

    const [tags, setTags] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const addTag = (text: string) => {
        if (tags.includes(text)) {
            return
        } else {
            setTags([...tags, text])
        }
    }

    useEffect(() => {
        setTags([
            'fast', 'easy', 'vegan'
        ])
        setIngredients([
            {name: "Zwiebeln", amount: 2, unit: "Stück"},
            {name: "Brot", amount: 5, unit: "Laib"},
            {name: "Äpfel", amount: 10, unit: "Dosen"}
        ])
    }, [])

    return (

        <div>
            <SimpleCard>
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Neues Rezept</h3>

                            </div>

                            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">

                                <SimpleInput label="Titel" id="title" name="title" size="lg" />
                                <TagInput label="Tags" name="tag-input" id="tag-input" onEnter={text => addTag(text)} />
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200">
                                    <div className="mt-0 sm:col-start-2 sm:col-span-2 flex gap-2 flex-wrap">
                                        {
                                            tags.map((tag) => {
                                                return (
                                                    <RemovableTag text={tag} onRemove={() => setTags(tags.filter(t => t != tag))}/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <TextInput label="Kurzbeschreibung" id="about" rows={2} name="about" />

                                <DragAndDrop
                                    label="Titelbild"
                                    id="recipe-image"
                                    name="recipe-image"
                                    onChange={(e) => { console.log(e) }}
                                    onDrop={(e) => { console.log(e) }}
                                />

                                <SimpleInput label="Dauer in min." name="duration" id="duration" size="sm" />
                                <SimpleInput label="Portionen" name="servings" id="servings" size="sm" />
                                <TextInput label="Anleitung" id="instructions" name="instructions" rows={5} />
                                
                                <AddIngredients label={"Zutaten"} ingredients={ingredients} setIngredients={setIngredients}/>

                            </div>
                        </div>

                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>

            </SimpleCard>

        </div>
    )
}
