import { StorageKeys } from "@/constants/storage";
import { Expense } from "@/models";
import { get, remove, save } from "./storage";

export async function saveExpense(expene: Expense) {
  await save(StorageKeys.EXPENSES, expene);
}

export async function getExpenses() {
  return await get<Expense>(StorageKeys.EXPENSES);
}

export async function deleteExpense() {
  await remove(StorageKeys.EXPENSES);
}

// updateExpense();s
