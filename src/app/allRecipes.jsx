'use client'
import findRecipes from './findRecipes'

export default function allRecipes() {

    function displayAll() {
        let recipe = findRecipes;
        // console.log(recipe)
        // return <div>
        //     <h1>{recipe.name}</h1>
        //     <p>{recipe.recipe}</p>
        // </div>
    }

    return (
        <>
            {displayAll()}
        </>
    )
}