'use server'
import { PrismaClient } from "@prisma/client";

export default async function updateSteps(formData) {
    const prisma = new PrismaClient();
    await prisma.steps.create({
        data: {
            step: String(formData.get('steps'))
        }
    })
    // let data = await prisma.steps.findMany()
    // console.log(data)
}
