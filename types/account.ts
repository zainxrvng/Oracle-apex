export interface Account {
  id: string;
  code: string;
  name: string;
  type: "category" | "account";
  parentId: string | null;
  level?: number; // ← add this
  balance?: string;
  status: "active" | "inactive";
  currency: "USD" | "EUR" | "GBP";
  accountType: "Bank" | "Receivable" | "Fixed Asset" | "Payable";
  description?: string;
  openingBalance?: number; // ← add this too (your API returns it)
}

export interface AccountTree extends Account {
  children?: AccountTree[];
}
