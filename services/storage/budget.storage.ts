import { StorageKeys } from "@/constants/storage";
import { Budget } from "@/models/Budget";
import { get, remove, save } from "./storage";

export async function saveBudget(budget: Budget) {
  const budgets = await listBudget();
  await save(StorageKeys.BUDGET, [...budgets, budget]);
}

export async function getBudget(): Promise<Budget | null> {
  try {
    const budget = await get<Budget[]>(StorageKeys.BUDGET);
    return budget?.at(-1) ?? null;
  } catch (error) {
    console.error("Erreur lors de la récupération du budget :", error);
    return null;
  }
}

export async function deleteBudget() {
  await remove(StorageKeys.BUDGET);
}

export async function listBudget(): Promise<Budget[]> {
  try {
    const data = await get<Budget[]>(StorageKeys.BUDGET);

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
