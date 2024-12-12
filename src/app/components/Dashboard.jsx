'use client'
import updateTags from '../createTag'
import updateMethods from '../createMethods';
import updateSteps from '../createSteps'
import updateIngredients from '../createIngredients'
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export default function Dashboard() {


    return (
        <>
            <form action={updateTags}>
                <h1>Dashboard</h1>
                <p>Welcome to the recipe generator! Please enter some 
                    info into our recipe database to begin. Afterwards, 
                    continue to the "Generate Recipes" page to create a recipe.
                    *Don't forget, you can enter multiple values for each input
                    after you save it into the database!*</p>
                <div className='checkboxes'>
                    <div className='heading'>
                        <h2>Enter Recipe Data into the Magical Recipe Database: </h2>
                    </div>
                    <div>
                        <label htmlFor="tag">Enter a tag: </label>
                        <input name="tagName" type="text" placeholder='spicy'/>
                    </div>
                </div>
                <button type="submit">Save Input</button>
            </form>
            <form action={updateIngredients}>
                <div>
                    <label htmlFor="tag">Enter an ingredient and it's matching tag: </label>
                    <input name="ingredient" type="text" placeholder='banana pudding'/>
                    <input name="tags" type="text" placeholder='sweet'/>
                </div>
                <button type="submit">Save Input</button>
            </form>
            <form action={updateMethods}>
                <div>
                    <label htmlFor="tag">Enter a cooking method and it's allotted time (in minutes): </label>
                    <input name="method" type="text" placeholder='mix'/>
                    <input name="time" type="text" placeholder='60'/>           
                </div>
                <button type="submit">Save Input</button>
            </form>
        </>
    )
}