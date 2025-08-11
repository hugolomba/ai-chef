import React from "react"
import Recipe from "./Recipe"
import IngredientList from "./IngredientList"
import {getRecipeFromMistral} from "../ai"
import Loading from "./Loading"


export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    // const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true)

    const recipeSection = React.useRef(null)
    
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null)
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
            console.log("recipeSection", recipeSection.current)
    }, [recipe])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient + Math.random()}>{ingredient}</li>
    ))
    
    async function getRecipe() {
        setIsLoading(true)
        const recipeFromMistral = await getRecipeFromMistral(ingredients)
        setRecipe(recipeFromMistral)
        setIsLoading(false)
    }


function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    event.target.reset(); 
    }

    return (
        <main>
                {!recipe && !isLoading ? <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form> : !isLoading && <button onClick={() => document.location.reload()}>Start Again</button>}
            {ingredients.length > 0 && !isLoading && <IngredientList ingredients={ingredients} getRecipe={getRecipe} ingredientsListItems={ingredientsListItems} recipe={recipe} isLoading={isLoading}/> }
            {isLoading ? <Loading /> : recipe && <Recipe  recipe={recipe} recipeSection={recipeSection} />}
        </main>
    )
}