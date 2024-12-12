'use server'
import { PrismaClient } from "@prisma/client";

export default async function updateTags(formData) {
    const prisma = new PrismaClient();
    // await prisma.ingredients.deleteMany()
    await prisma.tags.create({
        data: {
            name: String(formData.get('tagName'))
        }
    })
}
