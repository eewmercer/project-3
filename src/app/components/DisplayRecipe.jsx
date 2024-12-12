'use client'
import updateRecipe from "../updateRecipe"

export default function DisplayRecipe(props) {
    function makeRecipe() {
        for (let i = 0; i < props.recipeTemplate[1]; i++) {
            const generatedMethod = `${props.recipeTemplate[2][i].name} the ${props.recipeTemplate[0][i].name} for ${props.recipeTemplate[2][i].time} minutes`
            return <div className="recipe-steps">
                <h1 name="name">{props.recipeTemplate[3]}</h1>
                <p name="recipe">{generatedMethod}</p>
            </div>
        }
    }

    return (
        <>
        <form>
            {makeRecipe()}
            <button type="submit">Save Recipe</button>
        </form>
        </>
    )
}