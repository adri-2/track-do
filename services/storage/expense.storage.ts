// services\storage\expense.storage.ts
import { StorageKeys } from "@/constants/storage";
import { Expense } from "@/models";
import { get, remove, save } from "./storage";

export async function saveExpense(expene: Expense) {
  const expenses = await getExpenses();

  await save(StorageKeys.EXPENSES, [...expenses, expene]);
}

export async function getExpenses(): Promise<Expense[]> {
  try {
    const data = await get<Expense[]>(StorageKeys.EXPENSES);
    console.log("DEBUG getExpenses:", data);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function deleteExpense() {
  await remove(StorageKeys.EXPENSES);
}

// updateExpense();s
