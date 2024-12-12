"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';

export default async function updateRecipe(formData) {
    const prisma = new PrismaClient() 
    if (!formData == null || !formData == undefined) {
        await prisma.recipes.create({
            data: {
                name: String(formData.get('name')),
                recipe: String(formData.get('recipe'))
            }
        })
    }
    
    // redirect('/individual')
}