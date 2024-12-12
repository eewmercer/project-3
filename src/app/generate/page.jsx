'use client'
import React, { useActionState } from 'react'
import generateRecipe from '../createRecipe'
import DisplayRecipe from '../components/DisplayRecipe'

export default function GenerateRecipes() {
  const [state, formAction] = useActionState(generateRecipe, null)

  return (
    <>
      <form className="generate-form" action={formAction}>
        <div className='heading'>
          <h2>Recipe:</h2>
        </div>
        <div>
          <label htmlFor="tag">Enter a tag to base your recipe on: </label>
          <input name="tag" type="text" placeholder='sweet'/>
        </div>
        <div>
            <label htmlFor="steps">Enter number of steps for your recipe: </label>
            <input name="steps" type="text" placeholder="5"/>
        </div>
        <div>
            <label htmlFor="name">Enter recipe name: </label>
            <input name="name" type="text" placeholder="banana pudding"/>
          </div>
        <button>GENERATE</button>
      </form>
      <div className='generate-form'>
        <div>
        {state && <DisplayRecipe
          recipeTemplate={state}
        />}
        </div>
      </div>
    </>
  );
}