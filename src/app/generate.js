'use server'
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export default async function updateTags(formData) {
    await prisma.tags.create({
        data: {
            name: formData.get('tagName')
        }
    })
}