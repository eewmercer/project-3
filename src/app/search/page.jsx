'use client'
import React from 'react'
import { useState } from 'react';
// import Recipes from '../allRecipes'

export default async function SearchRecipes() {
  const [searchInput, setSearchInput] = useState();

  return (
    <main className='main-styles'>
      <h1>Search Through Recipes</h1>
      <div>
        <input className="search-bar" type="text" placeholder="Search" name="searchbar" onChange={(e) => {
          setSearchInput(e.target.value);
        }}/>
      </div>
      {/* <Recipes/> */}
    </main>
  )
}