'use server'
import { PrismaClient } from "@prisma/client";

export default async function findRecipes() {
    const prisma = new PrismaClient()
    let recipe = await prisma.recipes.findMany();

    return recipe;
}