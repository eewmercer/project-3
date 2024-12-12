'use server'
import { PrismaClient } from "@prisma/client";

export default async function findTags(formData) {
    const prisma = new PrismaClient();
    await prisma.tags.findMany({
        where: {
            name: {in: formData}
        }
    });
}
