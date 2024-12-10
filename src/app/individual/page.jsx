import { PrismaClient } from "@prisma/client";
import Update from '../updateRecipe'

export default async function individualRecipes({params}) {
    const prisma = new PrismaClient()

    return (
        <div>
            <h2>Your Recipes: </h2>
            <Update/>
        </div>
    );
}