export interface Expense {
  id: string;

  amount: number;
  categoryId: string;
  date: string;
  description?: string;
  budgetId: string;
}
