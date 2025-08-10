

export default function IngredientList(props) {
    return (
     <section className="ingredients-list-container">
                <h2>{props.recipe ? "Chosen Ingredients:" : "Ingredients on hand:"}</h2>
                <ul className="ingredients-list" aria-live="polite">{props.ingredientsListItems}</ul>

                {props.ingredients.length > 3 && !props.recipe && !props.isLoading && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </section>
    )
}