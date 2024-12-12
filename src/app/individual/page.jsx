import { PrismaClient } from "@prisma/client";

export default async function individualRecipes({params}) {
    const prisma = new PrismaClient()

    return (
        <div>
            <h2>Your Recipes: </h2>
            <Recipes/>
        </div>
    );
}