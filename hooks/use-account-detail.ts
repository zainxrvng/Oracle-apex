import { useQuery } from "@tanstack/react-query";
import { MOCK_ACCOUNTS } from "@/lib/mock-data";
import { Account } from "@/types/account";

// Fetches single account details by ID
export function useAccountDetail(id: string | null) {
  return useQuery({
    queryKey: ["account", id],
    queryFn: async () => {
      if (!id) return null;

      // 🔄 ORDS INTEGRATION POINT:
      // const res = await fetch(`/api/accounts/${id}`)
      // return res.json()

      // DUMMY DATA: Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 400));
      return MOCK_ACCOUNTS.find((acc) => acc.id === id) || null;
    },
    enabled: !!id, // Only runs when an ID is selected
  });
}
