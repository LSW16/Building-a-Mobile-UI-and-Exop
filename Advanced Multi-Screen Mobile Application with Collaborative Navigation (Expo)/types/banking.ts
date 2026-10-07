export type Account = {
  id: string;
  name: string;
  type: string;
  balance: number;
};

export type Transaction = {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  date: string;
  type: "income" | "expense";
};