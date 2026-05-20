import { z } from "zod";

export const accountSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  type: z.enum(["category", "account"]),
  parentId: z.string().nullable(),
  level: z.number().min(1).max(4), // Enforce 1-4 range
  status: z.enum(["active", "inactive"]),
  currency: z.enum(["USD", "EUR", "GBP"]),
  accountType: z.enum(["Bank", "Receivable", "Fixed Asset", "Payable"]),
  openingBalance: z.number().optional(),
  description: z.string().optional(),
});

export const createAccountSchema = accountSchema.refine(
  (data) => {
    // Rule: Users cannot create Level 1 entries directly
    if (!data.parentId) return false;
    return true;
  },
  {
    message: "New accounts must be a child of an existing category.",
    path: ["parentId"],
  },
);

export type AccountResponse = z.infer<typeof accountSchema>;
