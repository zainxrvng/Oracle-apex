import { useQuery } from "@tanstack/react-query";
import { buildTree } from "@/lib/utils/tree";
import { MOCK_ACCOUNTS } from "@/lib/mock-data";
import { AccountTree } from "@/types/account";

// Fetches & builds the account hierarchy tree
export function useAccounts() {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      // 🔄 ORDS INTEGRATION POINT:
      // const res = await fetch("/api/accounts")
      // const data = await res.json()
      // return buildTree(data)

      // DUMMY DATA: Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 600));
      return buildTree(MOCK_ACCOUNTS);
    },
  });
}

