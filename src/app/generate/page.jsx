'use client'
import React from 'react'
import { useState } from 'react';

export default function GenerateRecipes() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <form className="generate-form">
        {/* onSubmit={handleSubmit} */}
        <h1>Generate Your Own Recipes</h1>
        <div>
          <div className='recipe-gen'>
            <h2>Recipe: </h2>
            <button>GENERATE</button>
          </div>
          <div>
            {/* TODO
              - filled in recipe template
            */}
          </div>
        </div>
        <div>
          <h2>Final Touches: </h2>
          <div>
            <label htmlFor="name">Enter recipe name: </label>
            <input type="text" placeholder="banana pudding"/>
          </div>
          <div>
            <label htmlFor="name">Upload image: </label>
            <input type="text" placeholder="banana pudding"/>
          </div>
          <button type="submit">Save Recipe</button>
        </div>
      </form>
    </>
  );
}