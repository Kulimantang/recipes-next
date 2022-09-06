import AddRecipeButton from "../../components/Recipe/AddRecipeButton"
import RecipeListItem from "../../components/Recipe/RecipeListItem"
import Example from "../../components/Recipe/Test"
import { Recipe } from "../../types/Recipe"

const Recipes: Recipe[] = [
    {
        name: 'Nudeln',
        author: 'Felix',
        id: '1234',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pahlke-recipies.appspot.com/o/f69297b5-8e4a-48f8-a06c-4736c546e75bimage.jpeg?alt=media&token=4da1e2a5-3775-466f-9427-d23d5fe36961',
        authorId: '...'
    },

    {
        name: 'Andere Nudeln',
        author: 'Felix',
        id: '1234',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pahlke-recipies.appspot.com/o/ee4d84de-3229-4f20-9728-be716a858aabimage.jpeg?alt=media&token=703e7eb3-b82b-4e99-89c1-7ae06aed41f7',
        authorId: '...'
    }
]

const ShowRecipes = () => {
    return (
        <div>
            
            {/* Recipe List: */}
            <div className="container mx-auto my-8 flex flex-col gap-4 items-center">

            <AddRecipeButton/>

                {Recipes.map(recipe => {
                    return (
                        <RecipeListItem {...recipe} />
                    )
                })}
                <Example />
            </div>
        </div>
    )
}

export default ShowRecipes
