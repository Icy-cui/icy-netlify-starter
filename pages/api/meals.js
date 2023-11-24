import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await addMeal(req, res);
  } else if (req.method === "GET") {
    return await getAllMeal(res);
  } else if (req.method === "DELETE") {
    return await deleteMealById(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function getAllMeal(res) {
  try {
    const allMeals = await prisma.meals.findMany();
    return res.status(200).json(allMeals, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error getting all meals", success: false });
  }
}

async function deleteMealById(req, res) {
  const mealId = req.body.mealId;
  try {
    await prisma.meals.delete({
      where: {
        id: mealId,
      },
    });
    return res.status(200).json({ deleteItem: mealId, success: true });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientUnknownRequestError) {
      if (e.code === "P2025") {
        console.log("Meal record to delete does not exist.");
        throw res.status(404).json({ message: "Meal record to delete does not exist." });
      }
    }
    throw e;
  }
}

async function addMeal(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.meals.create({
      data: {
        id: body.id,
        description: body.description,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error adding a meal", success: false });
  }
}
