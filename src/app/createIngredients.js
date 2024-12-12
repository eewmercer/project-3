'use server'
import { PrismaClient } from "@prisma/client";

export default async function updateIngredients(formData) {
    const prisma = new PrismaClient();
    await prisma.ingredients.create({
        data: {
            name: String(formData.get('ingredient')),
            tags: String(formData.get('tags'))
        }
    })
}
