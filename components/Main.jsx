import React from "react"
import Recipe from "./Recipe"
import IngredientList from "./IngredientList"
import {getRecipeFromMistral} from "../ai"


export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    // const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")

   

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    async function getRecipe() {
        const recipeFromMistral = await getRecipeFromMistral(ingredients)
        setRecipe(recipeFromMistral)
    }


function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
                <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList ingredients={ingredients} getRecipe={getRecipe} ingredientsListItems={ingredientsListItems} /> }
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}