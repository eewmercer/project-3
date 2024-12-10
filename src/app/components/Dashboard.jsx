'use client'
import updateTags from '../generate'
import updateSteps from '../generate'
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export default function Dashboard() {

    return (
        <>
            <form onSubmit={updateTags}>
                <h1>Dashboard</h1>
                <p>Welcome to the recipe generator! Please enter some info into our recipe database to begin. Afterwards, continue to the "Generate Recipes" page to create a recipe</p>
                <div className='checkboxes'>
                    <h2>Choose tags & steps: </h2>
                    <p>Enter a tag: </p>
                    <ul>
                        <li>
                            <input name="tagName" type="text"/>
                            <label htmlFor="tag"></label>
                        </li>
                    </ul>
                </div>
                <button type="submit">Save Input</button>
            </form>
            <form onSubmit={updateSteps}>  
                <div>
                <label htmlFor="steps">Enter number of steps: </label>
                <input type="text" placeholder="5"/>
                </div>
            <button type="submit">Save Input</button>
            </form>
        </>
    )
}