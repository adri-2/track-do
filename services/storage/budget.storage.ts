import { StorageKeys } from "@/constants/storage";
import { Budget } from "@/models/Budget";
import { get, remove, save } from "./storage";

export async function saveBudget(budget: Budget) {
  await save(StorageKeys.BUDGET, budget);
}

export async function getBudget() {
  return await get<Budget>(StorageKeys.BUDGET);
}

export async function deleteBudget() {
  await remove(StorageKeys.BUDGET);
}

export async function listBudget() {
  return await get<Budget[]>(StorageKeys.BUDGET);
}
