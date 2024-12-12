'use server'
import { PrismaClient } from "@prisma/client";

export default async function updateMethods(formData) {
    const prisma = new PrismaClient();
    await prisma.methods.create({
        data: {
            name: String(formData.get('method')),
            time: String(formData.get('time'))
        }
    })
}
