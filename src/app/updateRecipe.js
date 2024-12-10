"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';

export default async function updateRecipe(formData) {
    const prisma = new PrismaClient() 

    await prisma.recipes.update({
        where: {
            id: Number(formData.get('id')),
        },
        data: {
            name: String(formData.get('name')),
            steps: String(formData.get('steps')),
            ingredients: String(formData.get('ingredients')),
            tags: String(formData.get('tags')),
            methods: String(formData.get('methods')),
        }
    })
    
    redirect('/individual')
}