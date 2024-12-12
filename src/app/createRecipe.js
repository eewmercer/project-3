'use server'
import { PrismaClient } from "@prisma/client";
// import DisplayRecipe from "./components/DisplayRecipe";

export default async function generateRecipe(previousState, formData) {
    let myRecipe = []

    //get an ingredient
    const prisma = new PrismaClient();
    const ingredientName = await prisma.ingredients.findMany({
        where: {
            tags: String(formData.get('tag'))
        }
    });

    //get number of steps
    const steps = String(formData.get('steps'));

    //get method types
    const methodType = await prisma.methods.findMany();

    //get recipe name
    const recipeName = String(formData.get('name'));

    myRecipe.push(ingredientName)
    myRecipe.push(steps)
    myRecipe.push(methodType)
    myRecipe.push(recipeName)

    return myRecipe;

    // return <DisplayRecipe 
    //     ingredient={ingredientName}
    //     steps={steps}
    //     methods={methodType}
    //     name={recipeName}
    // />;

    // const getRecipe = await prisma.recipe.create({
    //     data: {
    //         name: 
    //         steps:
    //         ingredients:
    //         tags:
    //         methods:
    //     }
    // });
}
